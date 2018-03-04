import { Reducer } from 'redux-testkit';
import * as faker from 'faker';
import { userReducer, User as UserModel, userActions, userFormReducer, profileReducer, UserProfileModel } from '../';
import * as Immutable from 'seamless-immutable';

describe(`User's reducer`, () => {
  describe('userReducer', () => {
    it('Should return an array received users of type UserModel', () => {
      const users: UserModel[] = Immutable<UserModel>([
        {
          id: faker.random.uuid(),
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          description: faker.lorem.words(),
          name: faker.name.findName()
        }
      ]);
      const action = { type: userActions.loadUsersAsync.done.type, payload: { result: { users } } };

      Reducer(userReducer)
        .expect(action)
        .toReturnState(users);
    });
  });

  describe('userFormReducer', () => {
    const user: UserModel = Immutable<UserModel>({
      id: faker.random.uuid(),
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      description: faker.lorem.words(),
      name: faker.name.findName()
    });

    it('Should return received user of type UserModel', () => {
      const action = { type: userActions.getUserEmailAsync.done.type, payload: { result: { user } } };

      Reducer(userFormReducer)
        .expect(action)
        .toReturnState(user);
    });

    it('Should update email on existing user in the store', () => {
      const result: UserModel = { ...user, email: 'admin@admin.com' };

      const action = {
        type: userActions.changeEmailAsync.done.type,
        payload: { result: { user: result } }
      };

      Reducer(userFormReducer)
        .withState(user)
        .expect(action)
        .toReturnState(result);
    });
  });

  describe('profileReducer', () => {
    const profile: UserProfileModel = Immutable<UserProfileModel>({
      id: faker.random.uuid(),
      photo: faker.image.imageUrl()
    });

    it('Should get the uploaded photo', () => {
      const result: UserProfileModel = { ...profile, photo: 'http://lorempixel.com/740/380' };

      const action = { type: userActions.uploadPhoto.type, payload: result };

      Reducer(profileReducer)
        .withState(profile)
        .expect(action)
        .toReturnState(result);
    });

    it('Should get the uploaded', () => {
      const result: UserProfileModel = { ...profile, photo: '' };

      const action = {
        type: userActions.updatePhotoAsync.done.type,
        payload: { result: { user: result } }
      };

      Reducer(profileReducer)
        .withState(profile)
        .expect(action)
        .toReturnState(profile);
    });
  });
});
