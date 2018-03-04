import { userManager } from '../security';
import axios from 'axios';
import { apiSettings } from './apiSettings';

interface IApi<T> {
  getAllAsync(accessToken: string): Promise<T[]>;
  SaveAsync(data: T): Promise<any>;
  UpdateAsync(data: T): Promise<any>;
  DeleteAsync(data: { id: string }): Promise<boolean>;
}

/**
 * The API class base
 *
 * @class ApiBase
 * @implements {IApi<T>}
 * @template T
 */
class ApiBase<T> implements IApi<T> {
  constructor(private urlBase: string) {}

  /**
   * Get all data of type @type {T} from the database
   *
   * @memberof ApiBase
   */
  public getAllAsync = async (accessToken: string): Promise<T[]> => {
    const url = `${apiSettings.baseUrl}v1/${this.urlBase}/`;
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    });

    const results = response.data;

    return results;
  };

  public GetByIdAsync = async (id: string): Promise<T> => {
    const url = `${apiSettings.baseUrl}v1/${this.urlBase}/${id}`;

    const response = await axios.get(url);

    const results = response.data;

    return results;
  };

  public GetAllFilteredAsync = async (searchValue: string): Promise<T[]> => {
    const url = `${apiSettings.baseUrl}v1/${this.urlBase}/${searchValue}`;

    const response = await axios.get(url);

    const results = response.data;

    return results;
  };

  /**
   * Save object of the type @type {T}
   *
   *
   * @memberof ApiBase
   */
  public SaveAsync = async (data: T): Promise<any> => {
    const url = `${apiSettings.baseUrl}v1/${this.urlBase}/`;

    const response = await axios({ method: 'post', url, data });

    const results = response.data;

    return results;
  };

  /**
   * Update object of type  @type {T}
   *
   *
   * @memberof ApiBase
   */
  public UpdateAsync = async (data: T): Promise<any> => {
    const url = `${apiSettings.baseUrl}v1/${this.urlBase}/`;

    const response = await axios({ method: 'put', url, data });

    const results = response.data;

    return results;
  };

  /**
   * Send a request to delete the object.  *
   *
   * @memberof ApiBase
   */
  public DeleteAsync = async (data: { id: string }): Promise<boolean> => {
    const url = `${apiSettings.baseUrl}v1/${this.urlBase}/`;

    const response = await axios({ method: 'delete', url, data });

    const results = response.data;

    return results;
  };
}

/**
 * Define axios interceptor
 *
 */
const interceptor = () =>
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        userManager.signinRedirect();
      }

      return Promise.reject(error);
    }
  );

export { ApiBase, interceptor };
