import { Injectable, inject } from '@angular/core';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { APP_CONFIG } from '@echannel-verification/data-config';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthInitService {
  private appConfig = inject(APP_CONFIG);
  private oauthService = inject(OAuthService);
  private router = inject(Router);

  async authGuard(config?: AuthConfig) {
    if (!this.oauthService.hasValidAccessToken()) {
      await this.initialize(config);
      return this.oauthService.hasValidAccessToken();
    }
    return true;
  }

  async login(config?: AuthConfig) {
    return await this.initialize(config);
  }

  private async initialize(config?: AuthConfig): Promise<boolean> {
    try {
      this.oauthService.configure({
        ...this.appConfig.keyCloakConfig,
        ...config,
      });
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      await this.oauthService.loadDiscoveryDocumentAndTryLogin();

      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.initLoginFlow();
      }
      this.oauthService.setupAutomaticSilentRefresh();
      return true;
    } catch (error) {
      console.error({
        error,
        redirectUri:
          window.location.origin + this.router.routerState.snapshot.url,
      });

      return false;
    }
  }

  async logout(config?: AuthConfig) {
    await this.login(config);
    this.oauthService.logOut();
  }
}
