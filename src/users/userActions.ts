import actionCreatorFactory from 'typescript-fsa';
import { User as UserModel, UserProfileModel } from 'users';

const name = 'USERS_ACTIONS';
const actionCreator = actionCreatorFactory(name);

/**
 * The dynamique redux action type for user
 */
export const userActions = {
  loadUsersAsync: actionCreator.async<
    { accessToken: string }, // start type
    { users: UserModel[] }, // success type
    { message: string } // error type
  >('LOAD'),

  createUserAsync: actionCreator.async<
    UserModel, // start type
    UserModel, // success type
    { message: string } // error type
  >('CREATE'),

  renameUserAsync: actionCreator.async<
    UserModel, // start type
    UserModel, // success type
    { message: string } // error type
  >('RENAME'),
  deleteUserAsync: actionCreator.async<
    { id: string; accessToken: string }, // start type
    { id: string }, // success type
    { message: string } // error type
  >('DELETE'),

  updatePhotoAsync: actionCreator.async<
    UserProfileModel, // start type
    {}, // success type
    { message: string } // error type
  >('UPDATE_PHOTO'),

  changeEmailAsync: actionCreator.async<
    UserModel, // start type
    { user: UserModel }, // success type
    { message: string } // error type
  >('CHANGE_EMAIL'),

  getUserEmailAsync: actionCreator.async<
    { accessToken: string }, // start type
    { user: UserModel }, // success type
    { message: string } // error type
  >('GET_USER_EMAIL'),
  uploadPhoto: actionCreator<{ photo: any }>('UPLOAD_PHOTO')
};
