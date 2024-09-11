import { combineReducers } from 'redux';
import signInReducer from './containers/auth/reducers';
import bookCarReducer from './containers/cars/reducers';
import { reducer } from './containers/pickupboyreg/reducer'; 

const rootReducer = combineReducers({
    signIn: signInReducer,
    bookCar: bookCarReducer,
    pickupboy: reducer,
});

export default rootReducer;
