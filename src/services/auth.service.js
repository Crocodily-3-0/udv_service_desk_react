import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8000';

class AuthService {
    async login(username, password) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        let params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);

        // return await fetch(API_URL + '/auth/jwt/login', {
        //     method: 'POST',
        //     body: JSON.stringify(params),
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        // }).then((response) => {
        //     return response.json();
        // })
        //     .then((data) => {
        //         console.log(data);
        //     });

        return axios
            .post(API_URL + '/auth/jwt/login', params, config)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('userToken', JSON.stringify(response.data.access_token))
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('userToken');
    }

    getCurrentUser() {
        axios.get(API_URL + '/users/me', {headers: authHeader()})
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data))
            });

        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();