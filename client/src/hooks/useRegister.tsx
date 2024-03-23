import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../redux/AppStatus'
import { userLogin } from '../redux/User'
import { useAppDispatch } from '../redux/hooks'

function useRegister() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const signup = async (
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    password: string | undefined,
    terms: boolean
  ) => {
    setIsLoading(true)
    setError(null)

    if (!terms) {
      setIsLoading(false)
      setError('Terms and conditions must be Accepted')
    } else {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, terms }),
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
  }

  return { signup, isLoading, error }
}

export default useRegister
