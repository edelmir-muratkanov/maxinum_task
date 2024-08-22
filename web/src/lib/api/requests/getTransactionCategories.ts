import { TransactionCategory } from '@/lib/types/transaction'
import { API } from './base'

export type GetTransactionCategoriesRequestConfig = RequestConfig | void

export type GetTransactionCategoriesResponse = TransactionCategory[]

export const getTransactionCategories = (params?: GetTransactionCategoriesRequestConfig) =>
  API.get<GetTransactionCategoriesResponse>(
    'transactions/categories',
    params?.config,
  )
