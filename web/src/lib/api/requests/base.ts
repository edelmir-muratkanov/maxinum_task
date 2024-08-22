import axios from 'axios'
import { ACCESS_TOKEN_STORAGE } from '../../constants'

export const API = axios.create({
  baseURL: '/api',
})

API.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  error => Promise.reject(error),
)

API.interceptors.response.use(
  response => response,
  async error => {
    /**
     * Можно обработать ошибку при истекании токена.
     * Решается при помощи стратегии access и refresh токенов
     */
    return Promise.reject(error)
  },
)
