//reducers.js
import * as type from './constants';

const initialState = {
  loading: false,
  error: null,
  carData: null,
  carId: null,
  isBooked: false,
  payload:null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.BOOK_CAR_REQUEST:
      return {
        ...state,
        loading:true
      };
    case type.BOOK_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        error:null,
        isBooked: true,
        carData: action.payload,
      };
    case type.BOOK_CAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
