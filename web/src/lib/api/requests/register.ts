import { AuthResponse } from '@/lib/types/auth-response'
import { API } from './base'

export type PostRegisterParams = {
  email: string
  password: string
}

export type PostRegisterResponse = AuthResponse

export type PostRegisterRequestConfig = RequestConfig<PostRegisterParams>

export const postRegister = ({ params, config }: PostRegisterRequestConfig) =>
  API.post<PostRegisterResponse>('auth/register', params, config)
