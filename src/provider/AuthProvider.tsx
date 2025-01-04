import React from 'react';
import { useAuth } from '../hooks/useAuth';

import AuthContext from './context/AuthContext';

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const {isAuthenticated, user, setIsAuthenticated} = useAuth();
    
    return (
        <AuthContext.Provider value={{user: user, isAuthenticated: isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;