import React from 'react';
import { component } from 'react-garden-kit';

function index() {
  return <div>Example app</div>;
}

// Exportar todo lo que otros modulos puedan utilizar (tipos, classes, controladores y componentes)
export { AppParams } from './app.params';
export { AppController } from './app.controller';
export default component(index);
