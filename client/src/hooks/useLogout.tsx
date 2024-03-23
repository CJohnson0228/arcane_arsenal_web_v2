import { useNavigate } from 'react-router-dom'
import { authLogout } from '../redux/AppStatus'
import { userLogout } from '../redux/User'
import { useAppDispatch } from '../redux/hooks'

function useLogout() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem('user')

    // logout of redux
    dispatch(userLogout())
    dispatch(authLogout())

    navigate('/')
  }

  return logout
}

export default useLogout
