import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthInitService } from './auth-init.service';
import { queryParamToString } from '@echannel-verification/data-util';

export const authGuard: CanActivateFn = async (route, router) => {
  const authInitSrv = inject(AuthInitService);
  const includesLogin = router.url.includes('/login');
  const queryString = includesLogin
    ? queryParamToString(route.queryParams)?.trim()
    : '';
  return authInitSrv.authGuard({
    redirectUri: `${window.origin}${includesLogin ? queryString : router.url}`,
  });
};
