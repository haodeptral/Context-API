import React, { type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
