import { ApiBase, apiSettings } from '../shared';
import { User as UserModel, UserProfileModel } from '../users/userModel';
import axios from 'axios';

/**
 * The gate to consume all user REST resources
 *
 * @class FunctionApi
 * @extends {ApiBase<UserModel>}
 */
class UserApi extends ApiBase<UserModel> {
  constructor(urlBase: string) {
    super(urlBase);
  }

  public updatePhotoAsync = async (data: UserProfileModel): Promise<any> => {
    const url = `${apiSettings.baseUrl}v1/aspnetusers/photo/${data.id}`;

    const response = await axios.put(url, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${data.accessToken}`
      }
    });

    const results = response.data;

    return results;
  };

  public getUserEmailAsync = async (accessToken: string): Promise<UserModel> => {
    const url = `${apiSettings.baseUrl}v1/aspnetusers/email`;

    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    const results = response.data;

    return results;
  };

  public changeEmailAsync = async (data: UserModel): Promise<UserModel> => {
    const url = `${apiSettings.baseUrl}v1/aspnetusers/email`;

    const response = await axios.put(url, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${data.accessToken}`
      }
    });

    const results = response.data;

    return results;
  };
}

const userApi = new UserApi('aspnetusers');

export { userApi };
