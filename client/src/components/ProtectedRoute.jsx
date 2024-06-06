import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProtectedRoute = () => {
  const userLoggedIn = useSelector((state)=>state.user.canLogIn);
  return (
    <div>
      {
        !userLoggedIn ? <Outlet /> : <Navigate to='/login'/>
      }
      
    </div>
  )
}

export default ProtectedRoute
