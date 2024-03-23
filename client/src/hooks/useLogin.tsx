import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../redux/AppStatus'
import { userLogin } from '../redux/User'
import { useAppDispatch } from '../redux/hooks'

export function useLogin() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const login = async (email: string | undefined, password: string | undefined) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))
      dispatch(userLogin(json))
      dispatch(authLogin())

      setIsLoading(false)
      navigate('/home')
    }
  }

  return { login, isLoading, error }
}
