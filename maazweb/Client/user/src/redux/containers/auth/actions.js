import * as type from './constants';

export const signUpWithEmail = data => ({
  type: type.SIGN_IN_REQUEST,
  payload: data,
});


export const signUpSuccess = payload => ({
  type: type.SIGN_IN_SUCCESS,
  payload:payload ,
});

export const signInFailure = error => ({
  type: type.SIGN_IN_FAILURE,
  payload: error,
});


export const checkUserSession = () => ({type: type.CHECK_USER_SESSION});
export const setSignedIn = (user) => ({type: type.SET_SIGNED_IN,payload:user});
export const setSignedOut = () => ({type: type.SET_SIGNED_OUT});

export const signOutFailure = (error) => ({
  type: type.SIGN_OUT_FAILURE,
  payload:error
});


export const signOutSuccess = () => ({
  type: type.SIGN_OUT_SUCCESS
});

