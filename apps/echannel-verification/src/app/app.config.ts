import { provideAnimations } from '@angular/platform-browser/animations';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiDialogModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TuiPdfViewerModule } from '@taiga-ui/kit';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { TUI_DATE_FORMAT, TUI_DATE_SEPARATOR } from '@taiga-ui/cdk';
import { APP_CONFIG } from '@echannel-verification/data-config';
import { environment } from '../environments/environment';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(
      HttpClientModule,
      TuiDialogModule,
      TuiPdfViewerModule,
      TuiAlertModule,
      TuiRootModule
    ),
    { provide: TUI_DATE_FORMAT, useValue: 'DMY' },
    { provide: TUI_DATE_SEPARATOR, useValue: '/' },
    {
      provide: APP_CONFIG,
      useValue: environment,
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
};
