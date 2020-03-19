import {configureStore} from "@reduxjs/toolkit";

import hours from "./hours/slice";

const store = configureStore({
  reducer: {
    hours,
  },
});

export default store;
