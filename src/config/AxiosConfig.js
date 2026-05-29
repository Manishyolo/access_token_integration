import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

AxiosInstance.interceptors.response.use(
    (response)=>{
        console.log("response from interceptor", response);
        return response;
    }
    ,async(err)=>{
        let originalRequest = err.config;
        if(err.response.status === 401 || !originalRequest._retry){
            originalRequest._retry = true;
            try{
               let res =  await AxiosInstance.get("/api/user/get-accessToken");
               console.log(res)
                return AxiosInstance(originalRequest);
            }catch(error){
                console.log("error from refresh token", error);
                window.location.href = "/"; // Redirect to login page
                return Promise.reject(error);
            }
        }
        console.log("error from interceptor", err);
    })

export default AxiosInstance;