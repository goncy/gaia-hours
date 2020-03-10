import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import DashboardScreen from "./hours/screens/Dashboard";
import RegisterScreen from "./hours/screens/Register";
import LoginScreen from "./session/screens/Login";

const Stack = createStackNavigator();

export default function App() {
  const [session, setSession] = React.useState(null);

  if (!session) return <LoginScreen onLogin={setSession} />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={DashboardScreen} name="Dashboard" />
        <Stack.Screen name="Register">{(props) => <RegisterScreen {...props} session={session} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
