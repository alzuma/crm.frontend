// Typed API client: the single place where requests to the CRM backend are
// made. By default requests go to the same origin: in development the Vite
// server proxies /api and /health to the backend (see vite.config.ts), and
// in production the static host does the same. Set VITE_API_BASE_URL in .env
// (see .env.example) to call the backend directly at another address; no
// code change is needed to move the backend.

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? ''

export class ApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  let response: Response
  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init.headers,
      },
    })
  } catch {
    throw new ApiError(0, `Could not reach the backend at ${apiBaseUrl}`)
  }
  if (!response.ok) {
    throw new ApiError(response.status, `Request to ${path} failed with status ${response.status}`)
  }
  if (response.status === 204) {
    return undefined as T
  }
  return (await response.json()) as T
}

export interface HealthResponse {
  status: string
}

export function getHealth(): Promise<HealthResponse> {
  return request<HealthResponse>('/health/live')
}
