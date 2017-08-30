interface IApiSettings {
  BaseUrl: string;
}

/**
 *  The configuration of API
 *
 * @class ApiSettings
 * @implements {IApiSettings}
 */
class ApiSettings implements IApiSettings {
  constructor(public BaseUrl: string) {
  }
}

const apiSettings = new ApiSettings('http://localhost:31393/');

export  {apiSettings, IApiSettings };
