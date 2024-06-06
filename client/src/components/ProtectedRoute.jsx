/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = () => {
  const user = useSelector((state)=>state.user.value)
  const userLoggedIn = user.loggedIn;
  // {auth, component: component,...rest}
  return (
    <div>
      {/* <Route {...rest} render={(props)}></Route>
      if (auth) {
        return <Component {...props}></Component>
      }
       */}
      {
        userLoggedIn ? <Outlet /> : <Navigate to='/login'/>
      }
      
    </div>
  )
}

export default ProtectedRoute
