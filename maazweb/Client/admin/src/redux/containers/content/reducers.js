import * as type from './constants';

const initialState = {
  loading: false,
  error: null,
  payload:null
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.ADD_ABOUT_US:
      return {
        ...state,
        loading:true
      };
    case type.ADD_ABOUT_US_SUCCESS:
      return {
        ...state,
        loading: false,
        error:null,
        payload: action.payload,
      };
    case type.ADD_ABOUT_US_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
