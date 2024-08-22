import { createContext } from 'react'
import { User } from '../../types/auth-response'

export interface ProfileContextProps {
  user?: User
  setUser?: (user: User) => void
}

export const ProfileContext = createContext<ProfileContextProps>({
  user: undefined,
  setUser: () => {},
})
