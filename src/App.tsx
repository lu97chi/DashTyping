import React from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { navigator, AppConfigCtx, ServiceStore } from 'react-garden-kit';
import {} from './rrsx.defaults';

import { Router } from 'react-router-dom';
import { MainRoute } from './router';

const mainAppConfig = { appId: 'MAIN', params: {}, store: {} };
const store = new ServiceStore(mainAppConfig);
mainAppConfig.store = store;

function App() {
  return (
    <AppConfigCtx.Provider value={mainAppConfig as any}>
      <Router history={navigator.history}>
        <MainRoute />
      </Router>
    </AppConfigCtx.Provider>
  );
}

export default App;
