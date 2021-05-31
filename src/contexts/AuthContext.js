import React, {useContext, useEffect, useState} from 'react'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const AuthContext = React.createContext();

const API_URL = 'http://localhost:8000';

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({});
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
        const tokenData = await response.json()
        let token = tokenData.access_token;

        const getConfig = {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const userResponse = await fetch(API_URL + '/me', getConfig)
        let userData = await userResponse.json();

        let currentUser = {
            token,
            userData
        }
        console.log(currentUser)

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
        setCurrentUser({});
        cookies.remove('currentUser')
    }

    const value = {
        currentUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

