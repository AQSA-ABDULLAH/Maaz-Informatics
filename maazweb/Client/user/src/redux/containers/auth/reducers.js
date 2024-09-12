import * as type from './constants';

const initialState = {
  loading: false,
  error: null,
  user:null,
  userId: null,
  isSignedIn: false,
  payload:null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.SIGN_IN_REQUEST:
      return {
        ...state,
        loading:true
      };
    case type.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error:null,
        user: action.payload,
      };
    case type.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case type.SET_SIGNED_IN:
      return{
        ...state,
        isSignedIn:true,
        user: action.payload,

      };
    case type.SET_SIGNED_OUT:
      return{
        ...state,
        loading:true,
      } 
      case type.SIGN_OUT_SUCCESS:
        return {
          ...state,
          loading: false,
          isSignedIn: false,
          userId: null
        };
      case type.SIGN_OUT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
    default:
      return state;
  }
}
