import { userApi, UserProfileModel, User as UserModel } from '../';
import { apiSettings } from '../../shared';
import * as Immutable from 'seamless-immutable';
import * as faker from 'faker';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('UserApi', () => {
  const mock = new MockAdapter(axios);

  it('Should update photo profile', async () => {
    const userProfile: UserProfileModel = Immutable<UserProfileModel>({
      id: faker.random.uuid(),
      photo: faker.image.imageUrl()
    });

    const data = { response: true };

    mock.onPut(`${apiSettings.baseUrl}v1/aspnetusers/photo/${userProfile.id}`).reply(200, data);

    const response = await userApi.updatePhotoAsync(userProfile);

    expect(response).toEqual(data);
  });

  it('Should load email of user', async () => {
    const data: UserModel = Immutable<UserModel>({
      id: faker.random.uuid(),
      email: faker.internet.email()
    });

    mock.onGet(`${apiSettings.baseUrl}v1/aspnetusers/email`).reply(200, data);

    const response = await userApi.getUserEmailAsync(faker.lorem.paragraph());

    expect(response).toEqual(data);
  });

  it('Should change email of user', async () => {
    const data: UserModel = Immutable<UserModel>({
      id: faker.random.uuid(),
      email: faker.internet.email()
    });

    mock.onPut(`${apiSettings.baseUrl}v1/aspnetusers/email`).reply(200, data);

    const response = await userApi.changeEmailAsync(data);

    expect(response).toEqual(data);
  });

  it('Should load all users', async () => {
    const data: UserModel[] = Immutable<UserModel>([
      {
        id: faker.random.uuid(),
        email: faker.internet.email()
      }
    ]);

    mock.onGet(`${apiSettings.baseUrl}v1/aspnetusers/`).reply(200, data);

    const response = await userApi.getAllAsync(faker.lorem.paragraph());

    expect(response).toEqual(data);
  });
});
