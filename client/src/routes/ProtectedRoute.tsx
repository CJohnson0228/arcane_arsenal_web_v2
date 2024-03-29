import { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authLogin } from '../redux/AppStatus'
import { userLogin } from '../redux/User'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

type ProtectedRouteProps = PropsWithChildren

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useAppSelector((state) => state.appState.auth)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const json = localStorage.getItem('user')
    if (!user) {
      if (json !== null) {
        const localuser = JSON.parse(json)
        dispatch(userLogin(localuser))
        dispatch(authLogin())
      } else {
        navigate('/', { replace: true })
      }
    }
  }, [navigate, user])

  return children
}
