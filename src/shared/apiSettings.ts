interface ApiSettings {
  domain: string;
  baseUrl: string;
}

/**
 * The settings of the entire application
 *
 * @interface ApiSettings
 */
const apiSettings: ApiSettings = {
  domain: 'http://localhost:50946/',
  baseUrl: 'http://localhost:50946/api/'
};

export { apiSettings, ApiSettings };
