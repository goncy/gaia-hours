import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {selectors, actions} from "./slice";

export function useHours() {
  const dispatch = useDispatch();
  const hours = useSelector(selectors.hours);
  const isLoading = useSelector(selectors.isLoading);
  const list = useCallback(() => dispatch(actions.list()), [dispatch]);
  const register = useCallback((...params) => dispatch(actions.add(...params)), [dispatch]);

  return {hours, isLoading, list, register};
}
