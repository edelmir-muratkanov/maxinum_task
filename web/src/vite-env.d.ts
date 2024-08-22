/// <reference types="vite/client" />

interface MutationSettings<Params = void, Func = unknown> {
  config?: ApiRequestConfig
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    unknown,
    Params,
    unknown
  >
}

interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<
      Awaited<ReturnType<Func>>,
      unknown,
      Awaited<ReturnType<Func>>,
      unknown
    >,
    'queryKey'
  >
}

type ApiRequestConfig = import('axios').AxiosRequestConfig

type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: ApiRequestConfig }
  : { params: Params; config?: ApiRequestConfig }

interface BaseErrorResponse {
  type: string
  title: string
  status: number
  detail: string
  instance: string
  errors?: Record<string, string>
}

interface BasePaginatedResponse<T> {
  totalPages: number
  totalCount: number
  hasPreviousePage: boolean
  hasNextPage: boolean
  items: T[]
}
