import log from "logger";

type OptionsType = {
  body?: Record<string, any>;
  method?: string;
  headers?: Record<string, any>;
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

  const res = await fetch(endpoint, config);

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
