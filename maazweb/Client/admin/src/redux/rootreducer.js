import { combineReducers } from 'redux';
import signInReducer from './containers/auth/reducers';

const rootReducer = combineReducers({
    auth: signInReducer,
   
});

export default rootReducer;
