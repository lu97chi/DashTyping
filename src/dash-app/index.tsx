import React from 'react';
import { component, useAppConfig } from 'react-garden-kit';
import { AppParams } from './app.params';
import Layout from './containers/Layout';

function Index() {
    const { params } = useAppConfig();
    const { layoutConfig, layoutData, propRouter, theme} = params as AppParams;
    const { header, sidebar } = layoutConfig;
    const { headerData, sidebarData} = layoutData;
    return <Layout
      header={header}
      sidebar={sidebar}
      headerData={headerData}
      sidebarData={sidebarData}
      theme={theme}
      >
        <div>fds</div>
    </Layout>
}

export type AppParams = AppParams;
export { AppController } from './app.controller';
export default component(Index);