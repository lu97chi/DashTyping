import React from 'react';
import { component } from 'react-garden-kit';
import { AppParams } from './app.params';

function Index() {
  return <div>Hola mundo</div>;
}

// Exportar todo lo que otros modulos puedan utilizar (tipos, classes, controladores y componentes)
export type AppParams = AppParams;
export { AppController } from './app.controller';
export default component(Index);
