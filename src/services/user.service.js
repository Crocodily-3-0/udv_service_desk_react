import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8000';

class UserService {
    getReferencesBoard() {
        return axios.get(API_URL + '/references', {headers: authHeader()});
    }

    getPublicDeskBoard() {
        return axios.get(API_URL + '/desk', {headers: authHeader()});
    }
}

export default new UserService();