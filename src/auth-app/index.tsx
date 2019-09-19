import React from 'react';
import { useAppConfig, component } from 'react-garden-kit';
import withFirebaseAuth from 'react-with-firebase-auth';
import { AppParams } from './app.params';
import login from './containers/auth';

function Index() {
  const { params } = useAppConfig();
  const appParams = params as AppParams;
  const WrapedComponent = withFirebaseAuth({
    providers: appParams.providers,
    firebaseAppAuth: appParams.firebaseAuth,
  })(login as React.FC);
  return <WrapedComponent />;
}

// Exportar todo lo que otros modulos puedan utilizar (tipos, classes, controladores y componentes)
export type AppParams = AppParams;
export { AppController } from './app.controller';
export default component(Index);
