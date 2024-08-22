import { useMutation } from '@tanstack/react-query'
import { postLogin, PostLoginRequestConfig } from '../requests/login'

export const usePostLoginMutation = (
  settings?: MutationSettings<PostLoginRequestConfig, typeof postLogin>,
) =>
  useMutation({
    mutationKey: ['postLogin'],
    mutationFn: ({ params, config }) =>
      postLogin({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  })
