import axios from "axios";
import { errorInterceptor, requestInterceptor } from "../redux/interceptors";
// const baseURL = `http://localhost:3000`;
export const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const request = axios.create({ baseURL: baseURL });

request.interceptors.response.use(null, errorInterceptor);
request.interceptors.request.use(requestInterceptor);

export default request;