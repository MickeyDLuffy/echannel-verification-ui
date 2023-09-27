import { InjectionToken, PLATFORM_ID, inject } from '@angular/core';
import { AppConfigModel } from '@echannel-verification/data-interface';

export const APP_CONFIG = new InjectionToken<AppConfigModel>(
  'app environment values'
);

export const WINDOW = new InjectionToken<Window>('window', {
  providedIn: 'root',
  factory: () => {
    const platform = inject(PLATFORM_ID);
    return platform === 'browser' ? window : ({} as Window);
  },
});
