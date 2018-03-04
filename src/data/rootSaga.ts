import { all } from 'redux-saga/effects';
import { userSaga } from '../users';

/**
 * Function generator which ecport all saga of application
 *
 * @export
 */
export function* rootSaga() {
  yield all([userSaga()]);
}
