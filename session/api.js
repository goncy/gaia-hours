import {AsyncStorage} from "react-native";

import requester from "../utils/requester";

export default {
  /*
  {
    key: "d1d584b95b2c468431970ac6f2152e4b9bcad7c9",
    user: {
      id: 3,
      username: "bog",
      email: "",
      first_name: "",
      last_name: "",
    },
  }
  */
  login: async (username, password) => {
    try {
      const response = await requester.post("/auth/", {username, password});

      await AsyncStorage.setItem("token", response.key);

      return response;
    } catch (error) {
      Promise.reject(`No se pudo iniciar sesión: ${error.message}`);
    }
  },
};
