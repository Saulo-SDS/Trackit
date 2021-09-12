import axios from "axios"
const URL_SERVER = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function getLogin(data) {
    const promise = axios.post(`${URL_SERVER}auth/login`, data);
    return promise;
}

export {
    getLogin
}