// @flow
import { createRouter } from 'react-garden-kit';
import ExampleApp from './example-app';
import ExampleController from './ExampleController';
import { ExampleParams } from './ExampleParams';

export const MainRoute = createRouter([
  {
    path: '/',
    exact: true,
    component: ExampleApp,
    appConfig: {
      appId: 'EXAMPLE_APP',
      controller: ExampleController,
      params: ExampleParams,
    },
  },
]);
