import Axios from 'axios';
import {IApiSettings} from 'base';

interface IApi < T > {
  GetAllAsync(): Promise < T[] >;
  SaveAsync(data: T): Promise <any >;
  UpdateAsync(data: T): Promise < any >;
  DeleteAsync(data: {id: string}): Promise <boolean >;
}

/**
 * The API class base
 *
 * @class ApiBase
 * @implements {IApi<T>}
 * @template T
 */
class ApiBase<T> implements IApi<T> {
  private apiSettings: IApiSettings = undefined;
  private urlBase: string = undefined;

  constructor(apiSettings: IApiSettings, urlBase: string) {
    this.apiSettings = apiSettings;
    this.urlBase = urlBase;
  }

  /**
   * Get all data of type @type {T} from the database
   *
   * @memberof ApiBase
   */
  public GetAllAsync = async (): Promise <T[]> => {
    const url = `${this.apiSettings.BaseUrl}api/${this.urlBase}/`;

    const response = await Axios.get(url);

    const results = response.data;

    return results;
  }

  public GetByIdAsync = async (id: string): Promise <T> => {
    const url = `${this.apiSettings.BaseUrl}api/${this.urlBase}/${id}`;

    const response = await Axios.get(url);

    const results = response.data;

    return results;
  }

  public GetAllFilteredAsync = async (searchValue: string): Promise <T[]> => {
    const url = `${this.apiSettings.BaseUrl}api/${this.urlBase}/${searchValue}`;

    const response = await Axios.get(url);

    const results = response.data;

    return results;
  }

  /**
   * Save object of the type @type {T}
   *
   *
   * @memberof ApiBase
   */
  public SaveAsync = async (data: T): Promise <any> => {
    const url = `${this.apiSettings.BaseUrl}api/${this.urlBase}/`;

    const response = await Axios({method: 'post', url, data});

    const results = response.data;

    return results;
  }

  /**
   * Update object of type  @type {T}
   *
   *
   * @memberof ApiBase
   */
  public UpdateAsync = async (data: T): Promise <any> => {
    const url = `${this.apiSettings.BaseUrl}api/${this.urlBase}/`;

    const response = await Axios({method: 'put', url, data});

    const results = response.data;

    return results;
  }

  /**
   * Send a request to delete the object.  *
   *
   * @memberof ApiBase
   */
  public DeleteAsync = async (data: { id: string }): Promise <boolean> => {
    const url = `${this.apiSettings.BaseUrl}api/${this.urlBase}/`;

    const response = await Axios({method: 'delete', url, data});

    const results = response.data;

    return results;
  }
}

export {ApiBase};
