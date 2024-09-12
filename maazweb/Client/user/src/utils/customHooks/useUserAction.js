import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/containers/auth/actions";

const useUserAction = (propFunction) => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.signIn);

  const userAction = () => {
    // You can dispatch actions or perform any other logic related to the user here

    // Call the propFunction if it exists
    if (typeof propFunction === "function") {
      propFunction();
    }
  };

  return { reduxState, userAction, dispatch, actions };
};

export default useUserAction;
