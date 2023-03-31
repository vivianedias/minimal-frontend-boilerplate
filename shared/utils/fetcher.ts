import log from "logger";
import { env } from "./constants";

export const getUrl = (endpoint: string) => {
  const urlByEnv: Record<string, string | undefined> = {
    preview:
      process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_VERCEL_URL,
    development: process.env.NEXT_PUBLIC_APP_URL || "localhost:3000",
    production: process.env.NEXT_PUBLIC_APP_URL,
  };

  const protocol = env === "development" ? "http://" : "https://";

  return protocol + urlByEnv[env] + endpoint;
};

type OptionsType = {
  body?: Record<string, any>;
  method?: string;
  headers?: Record<string, any>;
  isExternal?: boolean;
};

type ConfigType = {
  body: string | null;
} & Omit<OptionsType, "body" | "isExternal">;

interface ResponseError extends Error {
  status?: number;
}

export async function fetcher(endpoint: string, options?: OptionsType) {
  const config: ConfigType = {
    body: options?.body ? JSON.stringify(options?.body) : null,
    method: options?.method || "GET",
    headers: getHeaders(options?.headers),
  };

  const url = options?.isExternal ? endpoint : getUrl(endpoint);

  const res = await fetch(url, config);

  if (!res.ok) {
    log.error(`Response from a request that has thrown an error`, res);
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
