import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
    const useAuth= use(AuthContext);
    return useAuth;
        
};

export default useAuth;