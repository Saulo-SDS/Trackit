import axios from "axios"
const URL_SERVER = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function getLogin(body) {
    const promise = axios.post(`${URL_SERVER}auth/login`, body);
    return promise;
}

function postRegister(body) {
    const promise = axios.post(`${URL_SERVER}auth/sign-up`, body);
    return promise;
}

export {
    getLogin,
    postRegister
}