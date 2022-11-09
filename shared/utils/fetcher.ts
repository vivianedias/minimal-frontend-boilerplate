const env = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV;

const urlByEnv: Record<string, string | undefined> = {
  preview: process.env.NEXT_PUBLIC_VERCEL_URL,
  development: process.env.NEXT_PUBLIC_APP_URL,
  production: process.env.NEXT_PUBLIC_APP_URL,
};

export const url = "http://" + urlByEnv[env];

type OptionsType = {
  body?: Record<string, any>,
  method?: string;
  headers?: Record<string, any>
}

type ConfigType = {
  body: string | null;
} & Omit<OptionsType, 'body'>

interface ResponseError extends Error {
  status?: number;
}

async function apiClient(endpoint: string, options?: OptionsType) {

  const config: ConfigType = {
    ...options,
    body: options?.body ? JSON.stringify(options?.body) : null,
    method: options?.method || "GET",
    headers: getHeaders(options?.headers),
  };

  const res = await fetch(url + endpoint, config);

  if (!res.ok) {
    const error: ResponseError = new Error(
      `An error occurred while making the request: ${res.statusText}`
    );
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export function getHeaders(customHeaders = {}) {
  const headers = {
    "Content-Type": "application/json",
  };

  return { ...headers, ...customHeaders };
}

export default apiClient;
