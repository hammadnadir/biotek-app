import axios from "axios";
import { errorInterceptor, requestInterceptor } from "../redux/interceptors";

export const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const request = axios.create({ baseURL: baseURL });

request.interceptors.response.use(null, errorInterceptor);
request.interceptors.request.use(requestInterceptor);

export default request;