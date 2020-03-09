import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";

import DashboardScreen from "./hours/screens/Dashboard";
import RegisterScreen from "./hours/screens/Register";
import LoginScreen from "./session/screens/Login";

export default function App() {
  const [session, setSession] = React.useState(null);
  const [screen, setScreen] = React.useState("Dashboard");

  if (!session) return <LoginScreen onLogin={setSession} />;
  if (screen === "Dashboard") return <DashboardScreen redirect={setScreen} />;
  if (screen === "Register") return <RegisterScreen redirect={setScreen} session={session} />;

  return (
    <View style={styles.container}>
      <Text>La ruta seleccionada no existe</Text>
      <Button title="Volver al inicio" onPress={() => setScreen("Dashboard")} />
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
