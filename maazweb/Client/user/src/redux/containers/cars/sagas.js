import { put, takeLatest, call } from "redux-saga/effects";
import * as type from "./constants";
import * as actions from "./actions";
import { axiosInstance } from "../../util/AxiosHeader";

function* bookCar(action) {
  try {
    const { payload: carData } = action;

    // Use yield to wait for the result of the async function
    const { data } = yield call(
      axiosInstance.post,
      "/api/cars/getCars",
      carData
    );
    const { token } = data;
    localStorage.setItem("access_token", token);

    yield put({
      type: type.BOOK_CAR_SUCCESS,
      payload: token,
    });
  } catch (error) {
    yield put({ type: type.BOOK_CAR_FAILURE, payload: error.message });
    // console.error("Sign Up Error:", error.message);
  }
}

function* watchBookCar() {
  yield takeLatest(type.BOOK_CAR_REQUEST, bookCar);
}

export const carsaga = [watchBookCar()];
