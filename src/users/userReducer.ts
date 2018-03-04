import { Action, Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { userActions } from './userActions';
import { User as UserModel, UserProfileModel } from './userModel';
import * as toastr from 'toastr';

// tslint:disable:prettier
// tslint:disable:no-object-literal-type-assertion

/**
 * The redux reducer of state @type {UserModel[]}, it will handle an array of user in the store
 *
 * @param {UserModel[]} [previousState=[]]
 * @param {Action} action
 * @returns
 */
const userReducer: Reducer<UserModel[]> = (previousState: UserModel[] = [], action: Action) => {
  if (isType(action, userActions.loadUsersAsync.done)) {
    return action.payload.result.users;
  }

  return previousState;
};

/**
 * The redux form reducer of state @type {UserModel[]},
 * it will handle user object and will be used in redux-form object
 *
 * @param {UserModel} [previousState={} as UserModel]
 * @param {Action} action
 * @returns
 */
const userFormReducer: Reducer<UserModel> = (previousState: UserModel = {} as UserModel, action: Action) => {
  if (isType(action, userActions.getUserEmailAsync.done)) {
    return action.payload.result.user;
  } else if (isType(action, userActions.changeEmailAsync.done)) {
    toastr.options.closeButton = true;

    toastr.success(`L'email à été mise à jours avec succès !`, 'Mise à jour');

    return { ...previousState, email: action.payload.result.user.email };
  }

  return previousState;
};

/**
 * The redux reducer of state @type {UserProfileModel}
 *
 * @param {UserProfileModel} [previousState={} as UserProfileModel]
 * @param {Action} action
 * @returns
 */
const profileReducer: Reducer<UserProfileModel> = (
  previousState: UserProfileModel = {} as UserProfileModel,
  action: Action
) => {
  if (isType(action, userActions.uploadPhoto)) {
    return { ...previousState, photo: action.payload.photo };
  } else if (isType(action, userActions.updatePhotoAsync.done)) {
    toastr.options.closeButton = true;

    toastr.success(`Le photo du profile à été mise à jours avec succès !`, 'Mise à jour');

    return previousState;
  }

  return previousState;
};

export { userReducer, userFormReducer, profileReducer };
