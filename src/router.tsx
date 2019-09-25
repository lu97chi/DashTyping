// @flow
import { createRouter } from 'react-garden-kit';
import ExampleController from './ExampleController';
import { ExampleParams } from './ExampleParams';

import CrudApp from './crud-app';

export const MainRoute = createRouter([
  {
    path: '/crud',
    exact: true,
    component: CrudApp,
    appConfig: {
      appId: 'CRUD_APP',
      controller: ExampleController,
      params: ExampleParams
    }
  }
]);
