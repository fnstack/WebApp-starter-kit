import Oidc from 'oidc-client';
import { config } from '../config';

const userManagerConfig: Oidc.UserManagerSettings = {
  client_id: config.identity.clientId,
  redirect_uri: config.identity.redirectUri,
  response_type: 'token id_token',
  scope: 'openid profile',
  authority: config.identity.authority,
  // silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${
  //   window.location.port ? `:${window.location.port}` : ''
  // }/silent_renew.html`,
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: true
};

const userManager = new Oidc.UserManager(userManagerConfig);

export { userManager };
