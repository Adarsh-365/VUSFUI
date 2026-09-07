/**
 * Backend API Configuration
 * Reads VITE_BACKEND_URL from .env, falling back to https://vusfback.vercel.app
 */
export const BACKEND_URL: string = (
  import.meta.env.VITE_BACKEND_URL || 'https://vusfback.vercel.app'
).replace(/\/+$/, '');

/**
 * Builds endpoint URL(s) for API calls.
 * Prioritizes the configured VITE_BACKEND_URL from .env
 */
export const getApiEndpoints = (endpointPath: string): string[] => {
  const cleanPath = endpointPath.startsWith('/') ? endpointPath : `/${endpointPath}`;
  const endpoints: string[] = [];

  if (BACKEND_URL) {
    endpoints.push(`${BACKEND_URL}${cleanPath}`);
  }

  // Relative path (works with reverse proxy setups)
  endpoints.push(cleanPath);

  return endpoints;
};
