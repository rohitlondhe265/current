import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials: true
});

export default Api;