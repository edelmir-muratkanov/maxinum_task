export interface User {
  id: string
  email: string
}

export interface AuthResponse extends User {
  accessToken: string
}
