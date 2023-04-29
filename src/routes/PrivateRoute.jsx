import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();

    if(loading) {
        return <Spinner animation='border' variant='primary'/>
    }

    if(user) {
        return children;
    }

    // if(!user) {
    //     return 
    // }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default PrivateRoute;
