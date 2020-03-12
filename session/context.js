import React from "react";

import api from "./api";
import LoginScreen from "./screens/Login";

const SessionContext = React.createContext({});

const SessionProvider = ({children}) => {
  const [session, setSession] = React.useState(null);

  function login(username, password) {
    return api.login(username, password).then(setSession);
  }

  if (!session) return <LoginScreen onLogin={login} />;

  const state = {
    session,
  };

  const actions = {};

  return <SessionContext.Provider value={{state, actions}}>{children}</SessionContext.Provider>;
};

export {SessionProvider as Provider, SessionContext as default};
