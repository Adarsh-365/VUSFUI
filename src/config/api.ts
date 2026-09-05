/**
 * Backend API Configuration
 * Supports environment variable VITE_BACKEND_URL (e.g. https://api.yourdomain.com)
 * Falls back to empty string for relative proxying in dev or same-domain hosting.
 */
export const BACKEND_URL: string = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/+$/, '');

/**
 * Builds candidate endpoint URLs in order of priority:
 * 1. Configured VITE_BACKEND_URL (if provided)
 * 2. Relative endpoint path (for Vite dev proxy or reverse-proxy production setups)
 * 3. Direct local server fallback (http://127.0.0.1:8000)
 */
export const getApiEndpoints = (endpointPath: string): string[] => {
  const cleanPath = endpointPath.startsWith('/') ? endpointPath : `/${endpointPath}`;
  const endpoints: string[] = [];

  if (BACKEND_URL) {
    endpoints.push(`${BACKEND_URL}${cleanPath}`);
  }

  // Relative path (works with Vite proxy in dev)
  endpoints.push(cleanPath);

  // Local direct fallback if running backend locally without proxy
  if (BACKEND_URL !== 'http://127.0.0.1:8000') {
    endpoints.push(`http://127.0.0.1:8000${cleanPath}`);
  }

  return endpoints;
};
