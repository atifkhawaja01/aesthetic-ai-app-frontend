
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProfile } from '../api/auth'

export type User = { id: string; email: string; name?: string; phone?: string }
type Auth = { token: string; user: User } | null

type Ctx = {
  auth: Auth
  initialized: boolean
  setAuth: (a: Auth) => void
  signOut: () => void
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<Ctx>({
  auth: null,
  initialized: false,
  setAuth: () => {},
  signOut: () => {},
  refreshProfile: async () => {}
})

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [auth, setAuthState] = useState<Auth>(null)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      setAuthState({ token, user: JSON.parse(user) })
    }
    setInitialized(true)
  }, [])

  const setAuth = (a: Auth) => {
    setAuthState(a)
    if (a?.token) {
      localStorage.setItem('token', a.token)
      localStorage.setItem('user', JSON.stringify(a.user))
    } else {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }

  const signOut = () => setAuth(null)

  const refreshProfile = async () => {
    if (!auth?.user?.id) return
    const u = await getProfile(auth.user.id)
    setAuth({ token: auth.token!, user: u })
  }

  const value = useMemo(() => ({ auth, initialized, setAuth, signOut, refreshProfile }), [auth, initialized])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
