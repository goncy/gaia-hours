import React from "react";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";

import api from "../api";

export default function LoginScreen({onLogin}) {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {
    api.login(user, password).then(onLogin);
  }

  return (
    <View style={styles.container}>
      <Text>Iniciar sesion</Text>
      <TextInput placeholder="Usuario" value={user} onChangeText={setUser} />
      <TextInput placeholder="Contraseña" textContentType="password" value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
