import { Routes } from '@angular/router';
import {LoginComponent} from './pages/auth/login/login.component';
import {LogoutComponent} from './pages/auth/logout/logout.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AdminComponent} from './pages/admin/admin.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin',
      },
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'auth/callback',
  //   component: MagicLinkCallbackComponent,
  // },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

