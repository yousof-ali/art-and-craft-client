import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();

    const {user,loader} = useContext(AuthContext);
    if(loader){
        return <p className='text-center text-2xl pt-24'><span class="loading loading-spinner text-secondary"></span> </p>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/login"} ></Navigate>
};

export default PrivateRoute;