import { ReactNode, useState, useMemo } from 'react'
import { User } from '../../types/auth-response'
import { ProfileContext } from './context'

export interface ProfileProviderProps {
  children: ReactNode
  defaultUser?: User
}

export function ProfileProvider({
  children,
  defaultUser,
}: ProfileProviderProps) {
  const [user, setUser] = useState(defaultUser)
  const value = useMemo(() => ({ user, setUser }), [user])
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  )
}
