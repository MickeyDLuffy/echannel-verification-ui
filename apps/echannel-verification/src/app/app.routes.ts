import { Routes } from '@angular/router';
import { authGuard } from '@echannel-verification/data-auth';

export const appRoutes: Routes = [
  {
    path: '',
    // canActivate: [authGuard],
    loadComponent: () =>
      import('./shell/shell.component').then((m) => m.ShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'verification' },
      {
        path: 'verification',
        loadComponent: () =>
          import('@echannel-verification/verfication').then(
            (x) => x.VerficationComponent
          ),
      },
      {
        path: 'verification-data',
        loadComponent: () =>
          import('@echannel-verification/verfication-data').then(
            (x) => x.VerficationDataComponent
          ),
      },
    ],
  },
];
