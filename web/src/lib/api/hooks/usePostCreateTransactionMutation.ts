import { useMutation } from '@tanstack/react-query'
import {
  postCreateTransaction,
  PostCreateTransactionRequestConfig,
} from '../requests/createTransaction'

export const usePostCreateTransactionMutation = (
  settings?: MutationSettings<
    PostCreateTransactionRequestConfig,
    typeof postCreateTransaction
  >,
) =>
  useMutation({
    mutationKey: ['postCreateTransaction'],
    mutationFn: ({ params, config }) =>
      postCreateTransaction({
        params,
        config: { ...settings?.config, ...config },
      }),
    ...settings?.options,
  })
