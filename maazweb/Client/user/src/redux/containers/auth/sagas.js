import { put, takeLatest, call } from "redux-saga/effects";
import * as type from "./constants";
import * as actions from "./actions";
import { axiosInstance } from "../../util/AxiosHeader";

function* signIn(action) {
  try {
    const { payload: userData } = action;

    // Use yield to wait for the result of the async function
    const { token, message, status } = yield call(
      axiosInstance.post,
      "/api/user/user_signIn",
      userData
    );
    localStorage.setItem("access_token", token);

    yield put({
      type: type.SIGN_IN_SUCCESS,
      payload: token,
    });
  } catch (error) {
    yield put({ type: type.SIGN_IN_FAILURE, payload: error.message });
    // console.error("Sign Up Error:", error.message);
  }
}

function* signOutSaga() {
  console.log("working");
  try {
    localStorage.removeItem("access_token");
    yield put({
      type: type.SIGN_OUT_SUCCESS,
      // Assuming the response data is in the `data` property
    });
  } catch (error) {
    yield put({ type: type.SIGN_OUT_FAILURE, payload: error.message });
  }
}

function* checkUserSessionSaga() {}

function* watchSignOut() {
  yield takeLatest(type.SET_SIGNED_OUT, signOutSaga);
}
function* watchSignIn() {
  yield takeLatest(type.SIGN_IN_REQUEST, signIn);
}
function* watchsession() {
  yield takeLatest(type.CHECK_USER_SESSION, checkUserSessionSaga);
}

export const authsaga = [watchSignIn(), watchsession(), watchSignOut()];
