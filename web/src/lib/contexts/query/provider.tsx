import { ReactNode } from 'react'
import { queryClient } from './client'
import { QueryClientProvider } from '@tanstack/react-query'

export interface QueryProviderProps {
  children: ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
