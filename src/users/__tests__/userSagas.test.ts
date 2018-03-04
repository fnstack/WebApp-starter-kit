import { ChangeEmailAction, changeUserEmailStarted } from './../userSagas';
import { put, call } from 'redux-saga/effects';
import { User as UserModel, userActions, userApi } from '../';
import * as Immutable from 'seamless-immutable';
import * as faker from 'faker';
import { cloneableGenerator } from 'redux-saga/utils';
import { loadUsersStarted, LoadAction, UpdatePhotoAction, updatePhotoStarted, getEmailStarted } from '../userSagas';

describe('UserSagas', () => {
  const loadAction: LoadAction = {
    type: userActions.loadUsersAsync.started.type,
    payload: { accessToken: faker.lorem.paragraph() }
  };

  const userModel: UserModel = Immutable<UserModel>({
    id: faker.random.uuid(),
    email: faker.internet.email()
  });

  it('Should load users', async () => {
    const generator = cloneableGenerator(loadUsersStarted)(loadAction);

    const data: UserModel[] = Immutable<UserModel>([userModel]);

    expect(generator.next().value).toEqual(call(userApi.getAllAsync, loadAction.payload.accessToken));
    expect(generator.next(data).value).toEqual(
      put(
        userActions.loadUsersAsync.done({
          params: loadAction.payload,
          result: {
            users: data
          }
        })
      )
    );
    expect(generator.throw(data).value).toEqual(
      put(
        userActions.loadUsersAsync.failed({
          params: loadAction.payload,
          error: undefined
        })
      )
    );
  });

  it('Should update photo', async () => {
    const updatePhotoAction: UpdatePhotoAction = {
      type: userActions.loadUsersAsync.started.type,
      payload: { id: faker.random.uuid(), photo: faker.lorem.paragraph() }
    };

    const generator = cloneableGenerator(updatePhotoStarted)(updatePhotoAction);

    expect(generator.next().value).toEqual(call(userApi.updatePhotoAsync, updatePhotoAction.payload));
    expect(generator.next(true).value).toEqual(
      put(
        userActions.updatePhotoAsync.done({
          params: updatePhotoAction.payload,
          result: true
        })
      )
    );
    expect(generator.throw('Error message').value).toEqual(
      put(
        userActions.updatePhotoAsync.failed({
          params: updatePhotoAction.payload,
          error: undefined
        })
      )
    );
  });

  it('Should get email of user', async () => {
    const generator = cloneableGenerator(getEmailStarted)(loadAction);

    expect(generator.next().value).toEqual(call(userApi.getUserEmailAsync, loadAction.payload.accessToken));
    expect(generator.next(userModel).value).toEqual(
      put(
        userActions.getUserEmailAsync.done({
          params: loadAction.payload,
          result: {
            user: userModel
          }
        })
      )
    );

    expect(generator.throw('Error message').value).toEqual(
      put(
        userActions.getUserEmailAsync.failed({
          params: loadAction.payload,
          error: undefined
        })
      )
    );
  });

  it('Should change User email', async () => {
    const changeEmailAction: ChangeEmailAction = {
      type: userActions.changeEmailAsync.started.type,
      payload: { id: faker.random.uuid(), email: faker.internet.email() }
    };

    const generator = cloneableGenerator(changeUserEmailStarted)(changeEmailAction);

    expect(generator.next().value).toEqual(call(userApi.changeEmailAsync, changeEmailAction.payload));
    expect(generator.next(userModel).value).toEqual(
      put(
        userActions.changeEmailAsync.done({
          params: changeEmailAction.payload,
          result: {
            user: userModel
          }
        })
      )
    );
    expect(generator.throw('Error message').value).toEqual(
      put(
        userActions.changeEmailAsync.failed({
          params: changeEmailAction.payload,
          error: undefined
        })
      )
    );
  });
});
