import axios from "axios";
import Cookies from "js-cookie";

// config
import { HOST_API, TOKEN_SDK_KEY } from "./config";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
    baseURL: HOST_API,
    withCredentials: false,
});

axiosInstance.interceptors.request.use((request) => {
    const tokenSdk = Cookies.get(TOKEN_SDK_KEY);
    
    if (tokenSdk) {
        request.headers = request.headers || {};
        request.headers[TOKEN_SDK_KEY] = tokenSdk;
    }
    
    return request;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (
            error.response?.status === 401 &&
            error.response?.data?.message === "jwt expired"
        ) {
            // TODO: do refresh token
            // const refreshToken = localStorage.getItem("refreshToken");
            // const p = localStorage.getItem("p");
            // try {
            //     const rs = await axios.post(`${HOST_API}/auth/refresh-token`, {
            //         phone: p,
            //         refreshToken,
            //     });
            //     // console.log(rs);
            //     localStorage.setItem("accessToken", rs.data.accessToken);
            //     localStorage.setItem("refreshToken", rs.data.refreshToken);
            //     axiosInstance.defaults.headers.common.Authorization = `Bearer ${rs.data.accessToken}`;
            //     error.config.headers.Authorization = `Bearer ${rs.data.accessToken}`;
            //     return axiosInstance.request(error.config);
            // } catch (_error) {
            //     return Promise.reject(_error);
            // }
        }
        
        // console.log(error.response);
        return Promise.reject(
            error.response?.data || { message: "Something went wrong" }
        );
    }
);

export default axiosInstance;
