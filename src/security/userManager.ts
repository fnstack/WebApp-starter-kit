import { createUserManager } from 'redux-oidc';
import { apiSettings } from '../shared';

const userManagerConfig = {
  client_id: 'easy.hibrid',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/callback`,
  response_type: 'token id_token',
  scope: 'openid profile',
  authority: apiSettings.domain,
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
};

const userManager = createUserManager(userManagerConfig);

export { userManager };
