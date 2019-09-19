// @flow
import { createRouter } from 'react-garden-kit';
import AuthApp from './auth-app';
import AuthController from './AuthController';
import { AuthParams } from './AuthParams';

export const MainRoute = createRouter([
  {
    path: '/',
    exact: true,
    component: AuthApp,
    appConfig: {
      appId: 'AUTH_APP',
      controller: AuthController,
      params: AuthParams,
    },
  },
]);
