import {createSlice} from "@reduxjs/toolkit";

import api from "./api";

const hours = createSlice({
  name: "hours",
  initialState: {
    status: "pending",
    value: [],
  },
  reducers: {
    listStart(state) {
      return {
        ...state,
        status: "pending",
      };
    },
    listSuccess(_, action) {
      return {
        value: action.payload,
        status: "resolved",
      };
    },
    addStart(state) {
      return {
        ...state,
        status: "pending",
      };
    },
    addSuccess(state, action) {
      return {
        value: state.value.concat(action.payload),
        status: "resolved",
      };
    },
  },
});

export const list = () => async (dispatch) => {
  dispatch(hours.actions.listStart());
  dispatch(hours.actions.listSuccess(await api.fetch()));
};

export const add = (...params) => async (dispatch) => {
  dispatch(hours.actions.addStart());
  dispatch(hours.actions.addSuccess(await api.register(...params)));
};

export const actions = {list, add};
export const selectors = {
  hours: (state) => state.hours.value,
  isLoading: (state) => state.hours.status === "pending",
};

export default hours.reducer;
