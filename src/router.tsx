// @flow
import { createRouter } from 'react-garden-kit';
import ExampleController from './ExampleController';
import { ExampleParams } from './ExampleParams';
import { LandingParams } from './ExampleLandingParams';
import { DashParams} from './ExampleDashParams';
import Landing from './landing-app';

// import CrudApp from './crud-app';
import DashApp from './dash-app';

export const MainRoute = createRouter([
  // {
  //   path: '/crud',
  //   exact: true,
  //   component: CrudApp,
  //   appConfig: {
  //     appId: 'CRUD_APP',
  //     controller: ExampleController,
  //     params: ExampleParams
  //   }
  // },
  // {
  //   path: '/dash',
  //   exact: true,
  //   component: DashApp,
  //   appConfig: {
  //     appId: 'DASH_APP',
  //     params: DashParams,
  //     controller: ExampleController,
  //   }
  // }
  {
    path: '/landing',
    exact: true,
    component: Landing,
    appConfig: {
      appId: 'LANDING_APP',
      params: LandingParams,
      controller: ExampleController
    }
  }
]);
