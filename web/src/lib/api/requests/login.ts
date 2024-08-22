import { AuthResponse } from '@/lib/types/auth-response'
import { API } from './base'

export type PostLoginParams = {
  email: string
  password: string
}

export type PostLoginResponse = AuthResponse

export type PostLoginRequestConfig = RequestConfig<PostLoginParams>

export const postLogin = ({ params, config }: PostLoginRequestConfig) =>
  API.post<PostLoginResponse>('auth/login', params, config)
