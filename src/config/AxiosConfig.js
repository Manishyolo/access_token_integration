import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

AxiosInstance.interceptors.response.use(
    (response)=>{
        console.log("response from interceptor", response);
    }
    ,(err)=>{
        console.log("error from interceptor", err);
    })

export default AxiosInstance;