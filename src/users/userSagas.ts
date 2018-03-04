import { put, takeLatest, call } from 'redux-saga/effects';
import { userActions } from './userActions';
import { userApi } from './userApi';
import { Action } from 'redux';
import { UserProfileModel, User as UserModel } from '../users';
import * as swal from 'sweetalert';

//#region Type Actions

export interface LoadAction extends Action {
  payload: { accessToken: string };
}

export interface UpdatePhotoAction extends Action {
  payload: UserProfileModel;
}

export interface ChangeEmailAction extends Action {
  payload: UserModel;
}
//#endregion

/**
 * Function generators to load all user
 *
 * @export
 * @param {LoadAction} action
 */
export function* loadUsersStarted(action: LoadAction) {
  const inputParams = action.payload;
  try {
    const users = yield call(userApi.getAllAsync, action.payload.accessToken);

    yield put(
      userActions.loadUsersAsync.done({
        params: inputParams,
        result: {
          users
        }
      })
    );
  } catch (e) {
    swal('Erreur', `Une erreur s'est produite lors du chargement des utilisateurs, veuillez recommencer SVP`, 'error');

    yield put(
      userActions.loadUsersAsync.failed({
        params: inputParams,
        error: e.message
      })
    );
  }
}

/**
 * Function generator to update a profile picture
 *
 * @export
 * @param {UpdatePhotoAction} action
 */
export function* updatePhotoStarted(action: UpdatePhotoAction) {
  const inputParams = action.payload;
  try {
    const p = yield call(userApi.updatePhotoAsync, action.payload);

    yield put(
      userActions.updatePhotoAsync.done({
        params: inputParams,
        result: p
      })
    );
  } catch (e) {
    swal('Erreur', `Une erreur s'est produite lors de la mise à jour de la photo, veuillez recommencer SVP`, 'error');

    yield put(
      userActions.updatePhotoAsync.failed({
        params: inputParams,
        error: e.message
      })
    );
  }
}

/**
 * Function generator to load an email of user
 *
 * @export
 * @param {LoadAction} action
 */
export function* getEmailStarted(action: LoadAction) {
  const inputParams = action.payload;
  try {
    const user = yield call(userApi.getUserEmailAsync, action.payload.accessToken);

    yield put(
      userActions.getUserEmailAsync.done({
        params: inputParams,
        result: {
          user
        }
      })
    );
  } catch (e) {
    yield put(
      userActions.getUserEmailAsync.failed({
        params: inputParams,
        error: e.message
      })
    );
  }
}

/**
 * Function generator to change an email of user
 *
 * @export
 * @param {ChangeEmailAction} action
 */
export function* changeUserEmailStarted(action: ChangeEmailAction) {
  const inputParams = action.payload;
  try {
    const user = yield call(userApi.changeEmailAsync, action.payload);

    yield put(
      userActions.changeEmailAsync.done({
        params: inputParams,
        result: {
          user
        }
      })
    );
  } catch (e) {
    swal('Erreur', `Une erreur s'est produite lors de la mise à jour de l'email, veuillez recommencer SVP`, 'error');

    yield put(
      userActions.changeEmailAsync.failed({
        params: inputParams,
        error: e.message
      })
    );
  }
}

export function* userSaga() {
  yield [
    takeLatest<LoadAction>(userActions.loadUsersAsync.started.type, loadUsersStarted),
    takeLatest<UpdatePhotoAction>(userActions.updatePhotoAsync.started.type, updatePhotoStarted),
    takeLatest<ChangeEmailAction>(userActions.changeEmailAsync.started.type, changeUserEmailStarted),
    takeLatest<LoadAction>(userActions.getUserEmailAsync.started.type, getEmailStarted)
  ];
}
