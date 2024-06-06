import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectRoute = ({children, user, redirect="Login"}) => {

    if(!user) return <Navigate to={redirect} />;
    
    return children ? children : <Outlet />; //acts as placeholder for next routes 

}

export default ProtectRoute;