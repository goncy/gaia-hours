import React from "react";

import LoginScreen from "./screens/Login";

const SessionContext = React.createContext({});

const SessionProvider = ({children}) => {
  const [session, setSession] = React.useState(null);

  if (!session) return <LoginScreen onLogin={setSession} />;

  const state = {
    session,
  };

  const actions = {
    setSession,
  };

  return <SessionContext.Provider value={{state, actions}}>{children}</SessionContext.Provider>;
};

export {SessionProvider as Provider, SessionContext as default};
