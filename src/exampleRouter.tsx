// LayoutService contendra dos funciones(enable,disable) con la propiedad show
// @flow
import { createRouter } from 'react-garden-kit';
// import { ExampleParams } from './ExampleParams';
import ExampleController from './ExampleController';
import { LandingParams } from './ExampleLandingParams';
import GCrud from './crud-app';;

export const Router = createRouter(
  [
     {
    path: '/crud',
    exact: true,
    component: GCrud,
    appConfig: {
      appId: 'CRUD_APP',
      controller: ExampleController,
      params: LandingParams
    }
  },
  ],
);
