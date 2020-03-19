import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";

import {Provider as SessionProvider} from "./session/context";
import DashboardScreen from "./hours/screens/Dashboard";
import RegisterScreen from "./hours/screens/Register";
import store from "./store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SessionProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={DashboardScreen} name="Dashboard" />
            <Stack.Screen component={RegisterScreen} name="Register" />
          </Stack.Navigator>
        </NavigationContainer>
      </SessionProvider>
    </Provider>
  );
}
