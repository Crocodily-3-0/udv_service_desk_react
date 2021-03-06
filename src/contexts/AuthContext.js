import React, {useContext, useEffect, useState} from 'react'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const AuthContext = React.createContext();

const API_URL = 'http://localhost:8000';

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        let params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);

        const postConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        };

        const response = await fetch(API_URL + '/auth/jwt/login', postConfig);
        const currentUser = await response.json()

        if (!response.ok) {
            return { error: currentUser.error }
        }

        setCurrentUser(currentUser);
        cookies.set('currentUser', currentUser);
    }

    useEffect(() => {
        const currentUserInCookies = cookies.get('currentUser');
        if (currentUserInCookies) {
            setCurrentUser(currentUserInCookies);
        }
        setLoading(false);
    }, [])

    const logout = () => {
        setCurrentUser(null);
        cookies.remove('currentUser')
    }

    const userRole = (user) => {
        if (user.is_superuser) {
            return "разработчик";
        } else if (user.is_owner) {
            return "владелец";
        } else {
            return "представитель заказчика";
        }
    }

    const value = {
        currentUser,
        login,
        logout,
        userRole
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

