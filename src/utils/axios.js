import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rewrwer324.herokuapp.com",
});

export default axiosInstance;
