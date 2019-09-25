// @flow
import { createRouter } from 'react-garden-kit';
import ExampleController from './ExampleController';
import { ExampleParams } from './ExampleParams';
import { DashParams} from './ExampleDashParams';


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
  {
    path: '/dash',
    exact: true,
    component: DashApp,
    appConfig: {
      appId: 'DASH_APP',
      params: DashParams,
      controller: ExampleController,
    }
  }
]);
