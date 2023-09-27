const keycloakUrl = 'https://localhost:5050';
const realm = 'echannel';
const issuer = `${keycloakUrl}/realms/${realm}`;
const clientId = 'verifivation';
const scope = 'offline_access';

export const environment = {
  production: false,
  baseUrl: 'http://localhost:7002/api/v1',
  keyCloakConfig: {
    issuer,
    authTokenEndpoint: `${issuer}/protocol/openid-connect/token`,
    requestAccessToken: true,
    requireHttps: false,
    scope,
    clientId,
    redirectUri: window.location.origin,
    logoutUrl: window.location.origin + '/login',
    silentRefreshRedirectUri:
      window.location.origin + '/assets/silent-check-sso.html',
  },
};
