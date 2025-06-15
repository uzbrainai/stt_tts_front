import axios from "axios";
import {ACCESS_TOKEN, API_URL} from "./constants";

let instance = axios.create()

instance.defaults.baseURL = API_URL

const onRequestSuccess = (config: any) => {
    let token = localStorage.getItem(ACCESS_TOKEN)
    if (token) {
        config.headers.Authorization = 'Bearer ' + token
    }
    return config
}

const onRequestError = (config: any) => {
    return Promise.reject(config)
}

const onResponseSuccess = (config: any) => {
    return config
}

const onResponseError = (error: any) => {
    return Promise.reject(error)
}

instance.interceptors.request.use(onRequestSuccess, onRequestError)

instance.interceptors.response.use(onResponseSuccess, onResponseError)

export default instance