import { combineReducers } from 'redux';
import signInReducer from './containers/auth/reducers';

const rootReducer = combineReducers({
    signIn: signInReducer,
});

export default rootReducer;
