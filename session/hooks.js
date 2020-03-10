import React from "react";

import SessionContext from "./context";

export function useUser() {
  const {
    state: {session},
  } = React.useContext(SessionContext);

  return session.user;
}
