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

function getHabitsToday(autorization) {
    const promise = axios.get(`${URL_SERVER}habits/today`, autorization);
    return promise;
}

function getHabits(autorization) {
    const promise = axios.get(`${URL_SERVER}habits`, autorization);
    return promise;
}

function postHabit(body, autorization){
    const promise = axios.post(`${URL_SERVER}habits`, body, autorization);
    return promise;
}


export {
    getLogin,
    postRegister,
    getHabitsToday,
    getHabits,
    postHabit
}