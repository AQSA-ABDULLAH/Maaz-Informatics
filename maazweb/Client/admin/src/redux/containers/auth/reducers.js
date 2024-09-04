import * as type from './constants';

const initialState = {
  loading: false,
  error: null,
  user:null,
  userId: null,
  isSignedIn: !!localStorage.getItem('access_token'),
  payload:null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.SIGN_IN_REQUEST:
      return {
        ...state,
        loading:true,
        isSignedIn: false
      };
    case type.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error:null,
        user: action.payload,
        isSignedIn: true, 

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
        user: action.payload,

      };
    case type.SET_SIGNED_OUT:
      return{
        ...state,
        isSignedIn: false,
        loading:true,
      } 
      case type.SIGN_OUT_SUCCESS:
        return {
          ...state,
          loading: false,
          isSignedIn: false,
          user: null
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
