import React from "react";
import {StyleSheet, Text, View, Button, TextInput, Alert} from "react-native";

import api from "../api";
import Spinner from "../../ui/feedback/Spinner";

export default function LoginScreen({onLogin}) {
  const [status, setStatus] = React.useState("init");
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {
    setStatus("pending");

    api
      .login(user, password)
      .then(onLogin)
      .catch((error) => {
        setStatus("init");

        Alert.alert("Error", error);
      });
  }

  if (status === "pending") return <Spinner />;

  return (
    <View style={styles.container}>
      <Text>Iniciar sesion</Text>
      <TextInput autoCapitalize="none" placeholder="Usuario" value={user} onChangeText={setUser} />
      <TextInput
        secureTextEntry
        placeholder="Contraseña"
        textContentType="password"
        value={password}
        onChangeText={setPassword}
      />
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
