/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {
  const user = useSelector((state)=>state.user.value)
  const userLoggedIn = user.loggedIn;
  return (
    <div>
      {
        userLoggedIn ? <Outlet /> : <Navigate to='/login'/>
      }
    </div>
  )
}

export default ProtectedRoute
