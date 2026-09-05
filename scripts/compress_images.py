#!/usr/bin/env python3
"""
VUSF Image Converter & Compressor
===================================
Converts PNG, JPG, and unoptimized images to compressed, progressive JPEG format
for high-speed website performance.

Features:
- High quality JPEG compression (adjustable quality: default 82)
- Progressive encoding (loads progressively on web)
- Smart transparency/alpha channel handling (no black boxes on transparent PNGs)
- Automatic max-dimension downscaling (default 1920px)
- Before & After size reporting with total bandwidth saved
- Optional code reference updater across src/ (.tsx, .ts, .json)
"""

import os
import sys
import argparse
from pathlib import Path
from PIL import Image

SUPPORTED_INPUT_EXTS = {'.png', '.jpg', '.jpeg', '.webp', '.bmp', '.tiff'}

def convert_and_compress_image(
    input_path: Path,
    output_path: Path,
    quality: int = 82,
    max_dim: int = 1920,
    bg_color: tuple = (255, 255, 255),
    dry_run: bool = False
) -> tuple[int, int]:
    """
    Converts and compresses a single image to JPEG.
    Returns (original_size_bytes, new_size_bytes).
    """
    orig_size = input_path.stat().st_size

    if dry_run:
        return orig_size, orig_size

    try:
        with Image.open(input_path) as img:
            # 1. Handle Orientation from EXIF if present
            try:
                from PIL import ImageOps
                img = ImageOps.exif_transpose(img)
            except Exception:
                pass

            # 2. Handle Alpha / Transparency Channels (RGBA, LA, P)
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                alpha = img.convert('RGBA')
                background = Image.new('RGB', alpha.size, bg_color)
                background.paste(alpha, mask=alpha.split()[3])
                img_rgb = background
            elif img.mode != 'RGB':
                img_rgb = img.convert('RGB')
            else:
                img_rgb = img.copy()

            # 3. Downscale if dimension exceeds max_dim (preserving aspect ratio)
            w, h = img_rgb.size
            if max(w, h) > max_dim:
                if w >= h:
                    new_w = max_dim
                    new_h = int(h * (max_dim / w))
                else:
                    new_h = max_dim
                    new_w = int(w * (max_dim / h))
                img_rgb = img_rgb.resize((new_w, new_h), Image.Resampling.LANCZOS)

            # 4. Ensure destination directory exists
            output_path.parent.mkdir(parents=True, exist_ok=True)

            # 5. Save as Optimized Progressive JPEG
            img_rgb.save(
                output_path,
                format='JPEG',
                quality=quality,
                optimize=True,
                progressive=True
            )

        new_size = output_path.stat().st_size
        return orig_size, new_size

    except Exception as e:
        print(f"[ERROR] Failed to process {input_path}: {e}")
        return orig_size, orig_size


def update_code_references(src_dir: Path, rename_map: dict[str, str], dry_run: bool = False):
    """
    Scans source files (.tsx, .ts, .jsx, .js, .json, .css) and updates image filename references.
    """
    if not rename_map:
        return

    print("\n" + "=" * 60)
    print("Updating image references across codebase...")
    print("=" * 60)

    code_exts = {'.tsx', '.ts', '.jsx', '.js', '.json', '.html', '.css'}
    updated_files_count = 0

    for root, _, files in os.walk(src_dir):
        for f in files:
            if Path(f).suffix.lower() in code_exts:
                file_path = Path(root) / f
                try:
                    content = file_path.read_text(encoding='utf-8')
                    modified = False

                    for old_rel, new_rel in rename_map.items():
                        if old_rel in content:
                            content = content.replace(old_rel, new_rel)
                            modified = True

                    if modified:
                        if not dry_run:
                            file_path.write_text(content, encoding='utf-8')
                        print(f"  [UPDATED] {file_path.relative_to(src_dir.parent)}")
                        updated_files_count += 1
                except Exception as e:
                    print(f"  [ERROR] Reading {file_path}: {e}")

    print(f"Code references updated in {updated_files_count} files.")


def process_directory(
    target_dir: Path,
    quality: int = 82,
    max_dim: int = 1920,
    replace_in_place: bool = True,
    dry_run: bool = False,
    update_code: bool = False,
    src_dir: Path = Path('./src')
):
    """
    Traverses target directory and compresses/converts all eligible images.
    """
    print("=" * 60)
    print(f"  VUSF Image Compressor & JPEG Optimizer")
    print(f"  Target Directory : {target_dir.resolve()}")
    print(f"  JPEG Quality     : {quality}%")
    print(f"  Max Dimension    : {max_dim}px")
    print(f"  Mode             : {'DRY RUN (preview only)' if dry_run else 'ACTIVE CONVERSION'}")
    print("=" * 60 + "\n")

    files_to_process = []
    for root, _, files in os.walk(target_dir):
        for f in files:
            ext = Path(f).suffix.lower()
            if ext in SUPPORTED_INPUT_EXTS:
                files_to_process.append(Path(root) / f)

    if not files_to_process:
        print("No image files found to process.")
        return

    total_orig_bytes = 0
    total_new_bytes = 0
    processed_count = 0
    rename_map = {}

    for file_path in files_to_process:
        rel_path = file_path.relative_to(target_dir)
        ext = file_path.suffix.lower()

        # Output path
        if ext == '.jpeg':
            output_path = file_path
        else:
            output_path = file_path.with_suffix('.jpeg')

        orig_sz, new_sz = convert_and_compress_image(
            input_path=file_path,
            output_path=output_path,
            quality=quality,
            max_dim=max_dim,
            dry_run=dry_run
        )

        total_orig_bytes += orig_sz
        total_new_bytes += new_sz
        processed_count += 1

        # Track rename for code updating
        if file_path != output_path and not dry_run:
            old_rel_str = str(rel_path).replace('\\', '/')
            new_rel_str = str(output_path.relative_to(target_dir)).replace('\\', '/')
            rename_map[old_rel_str] = new_rel_str
            rename_map['/' + old_rel_str] = '/' + new_rel_str

            if replace_in_place and file_path.exists():
                try:
                    file_path.unlink()
                except Exception as e:
                    print(f"  [WARN] Could not remove original {file_path}: {e}")

        # Console Progress
        saved_pct = ((orig_sz - new_sz) / orig_sz * 100) if orig_sz > 0 else 0
        print(f"[{processed_count}/{len(files_to_process)}] {rel_path} -> {output_path.name} | "
              f"{orig_sz/1024:.1f} KB -> {new_sz/1024:.1f} KB ({saved_pct:+.1f}%)")

    # Update references in codebase if requested
    if update_code and rename_map and not dry_run:
        update_code_references(src_dir=src_dir, rename_map=rename_map, dry_run=dry_run)

    # Summary Report
    orig_mb = total_orig_bytes / (1024 * 1024)
    new_mb = total_new_bytes / (1024 * 1024)
    saved_mb = orig_mb - new_mb
    saved_pct = (saved_mb / orig_mb * 100) if orig_mb > 0 else 0

    print("\n" + "=" * 60)
    print("  COMPRESSION SUMMARY")
    print("=" * 60)
    print(f"  Total Images Processed : {processed_count}")
    print(f"  Original Size          : {orig_mb:.2f} MB")
    print(f"  Compressed Size        : {new_mb:.2f} MB")
    print(f"  Bandwidth Saved        : {saved_mb:.2f} MB ({saved_pct:.1f}% reduction)")
    print("=" * 60 + "\n")


def main():
    parser = argparse.ArgumentParser(
        description="Convert and compress images to high-performance progressive JPEG."
    )
    parser.add_argument(
        "--dir", "-d",
        type=str,
        default="./public",
        help="Directory containing images to process (default: ./public)"
    )
    parser.add_argument(
        "--quality", "-q",
        type=int,
        default=82,
        help="JPEG compression quality from 1 to 100 (default: 82)"
    )
    parser.add_argument(
        "--max-dim", "-m",
        type=int,
        default=1920,
        help="Maximum width/height in pixels for downscaling (default: 1920)"
    )
    parser.add_argument(
        "--keep-orig",
        action="store_true",
        help="Keep original unconverted images alongside new JPEGs"
    )
    parser.add_argument(
        "--update-code", "-u",
        action="store_true",
        default=True,
        help="Update image references in src/ files (default: True)"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview what would be converted without modifying files"
    )

    args = parser.parse_args()

    target_dir = Path(args.dir)
    if not target_dir.exists():
        print(f"[ERROR] Target directory '{target_dir}' does not exist.")
        sys.exit(1)

    process_directory(
        target_dir=target_dir,
        quality=args.quality,
        max_dim=args.max_dim,
        replace_in_place=not args.keep_orig,
        dry_run=args.dry_run,
        update_code=args.update_code,
        src_dir=Path('./src')
    )


if __name__ == "__main__":
    main()
