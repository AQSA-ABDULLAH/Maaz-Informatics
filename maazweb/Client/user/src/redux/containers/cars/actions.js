// actions.js
import * as type from './constants';

export const bookCar = data => ({
    type: type.BOOK_CAR_REQUEST,
    payload: data,
});

export const bookcarSuccess = payload => ({
    type: type.BOOK_CAR_SUCCESS,
    payload:payload,
  });
  
  export const bookcarFailure = error => ({
    type: type.BOOK_CAR_FAILURE,
    payload: error,
  });

  export const removeCar = (carId) => ({
    type: type.REMOVE_CAR,
    payload: carId,
});