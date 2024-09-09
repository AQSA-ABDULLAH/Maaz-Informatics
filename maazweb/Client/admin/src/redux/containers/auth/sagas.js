import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "./constants";
import { axiosInstance } from "../../util/AxiosHeader";
import { API } from "../../services";
import Swal from 'sweetalert2';


function* signIn(action) {
  try {
    const { payload: userData } = action;
    const res = yield call(
      axiosInstance.post,
      API.Login,
      userData
    );

    if (res.token) {
      yield put({
        type: type.SIGN_IN_SUCCESS,
        payload: res.token,
      });
      localStorage.setItem("access_token", res.token);
      yield call([Swal, 'fire'], {
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (res.status==='failed') {
      yield call([Swal, 'fire'], {
        icon: 'error',
        title: 'Login failed!',
        text: res.message,
      });
      yield put({ type: type.SIGN_IN_FAILURE, payload: res.error });
    } else {
      yield call([Swal, 'fire'], {
        icon: 'error',
        title: 'Login failed!',
        text: 'Unexpected error occurred.',
      });

      yield put({ type: type.SIGN_IN_FAILURE, payload: 'Unexpected error occurred' });
    }

  } catch (error) {
    yield call([Swal, 'fire'], {
      icon: 'error',
      title: 'Login failed!',
      text: 'An exception occurred.',
    });

    yield put({ type: type.SIGN_IN_FAILURE, payload: error });
  }
}


function* signOutSaga() {
  try {
    localStorage.removeItem("access_token");
    yield put({
      type: type.SIGN_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({ type: type.SIGN_OUT_FAILURE, payload: error.message });
  }
}



function* watchSignOut() {
  yield takeLatest(type.SET_SIGNED_OUT, signOutSaga);
}
function* watchSignIn() {
  yield takeLatest(type.SIGN_IN_REQUEST, signIn);
}


export const authsaga = [watchSignIn(), watchSignOut()];


