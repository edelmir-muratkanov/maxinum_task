import { Transaction } from '@/lib/types/transaction'
import { API } from './base'

export type GetTransactionsRequestConfig = RequestConfig | void

export type GetTransactionsResponse = Transaction[]

export const getTransactions = (params?: GetTransactionsRequestConfig) =>
  API.get<GetTransactionsResponse>('transactions', params?.config)
