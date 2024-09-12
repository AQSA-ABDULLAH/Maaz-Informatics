import { all } from 'redux-saga/effects';
import { authsaga } from './containers/auth/sagas';

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
}
