import { API } from './base'

export interface PostCreateTransactionRequest {
  categoryName: string
  date: Date
  amount: number
  comment?: string
}

export type PostCreateTransactionRequestConfig =
  RequestConfig<PostCreateTransactionRequest>

export const postCreateTransaction = ({
  params,
  config,
}: PostCreateTransactionRequestConfig) =>
  API.post('transactions', params, config)
