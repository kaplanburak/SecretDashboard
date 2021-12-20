import { useDispatch } from "react-redux";
import { ActionConsts } from "../redux/actions/consts";

export const useLoading = () => {
  const dispatch = useDispatch();

  const setLoading = (payload: boolean) => {
    dispatch({ type: ActionConsts.Common.SET_IS_LOADING, payload });
  };

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return { startLoading, stopLoading };
};
