import { all } from 'redux-saga/effects';
import { authsaga } from './containers/auth/sagas';
import { carsaga } from './containers/cars/sagas';

export default function* rootSaga() {
  try {
    yield all([
      ...authsaga,
    ])
  }
  catch (error) {
    // TODO:Need to return the correct error at this stage
    throw new Error(error);
  }

  try{
    yield all([
      ...carsaga,
    ])
  }
  catch (error){
    throw new Error(error);
  }
}
