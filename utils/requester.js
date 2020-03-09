import {AsyncStorage} from "react-native";
import axios from "axios";

const requester = axios.create({
  baseURL: `https://gaia-gestion-backend-testing.herokuapp.com`,
  headers: {
    "Content-Type": "application/json",
  },
});

requester.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

requester.interceptors.response.use((response) => response.data, Promise.reject);

export default requester;
