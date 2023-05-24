import axios from "axios";

const registration = (userData) => {
    return axios.post("http://localhost:3001/register", userData);
};

const login = (loginData) => {
    return axios.post("http://localhost:3001/login", loginData)
}
export default {
    registration: registration,
    login: login
};
