import React, { useState } from 'react';
import { component, useAppConfig } from 'react-garden-kit';
import { AppParams } from './app.params';
import {
  Input, Row, Col, Table,
} from 'antd';
import { GCrudWrapper } from './styledComponents';
import Header from './containers/Header';
import { Caller } from './caller';
import { ColumnMaker, filterData } from './helpers';
const { Search } = Input;

const GCrud = () => {
  const { params } = useAppConfig();
  const {
    intialConfig,
    columns,
    data,
    headerButtons
  } = params as AppParams;
  const {
    domain, title, filterProp, enableFilter 
  } = intialConfig;
  const [stateData, setStateData] = useState(data);
  return (
    <GCrudWrapper>
      <Header title={title} headerButtons={{ headerButtons, intialConfig }} />
      {
        enableFilter
          ? (
            <Row type="flex" justify="end">
              <Col md={6}>
                <Search
                  onSearch={(value) => setStateData(filterData(data, filterProp, value))}
                  placeholder="Buscar..."
                />
              </Col>
            </Row>
          ) : null
      }
      <Table columns={ColumnMaker(columns, Caller, domain)} dataSource={stateData} />
    </GCrudWrapper>
  );
};

// Exportar todo lo que otros modulos puedan utilizar (tipos, classes, controladores y componentes)
export type AppParams = AppParams;
export { AppController } from './app.controller';
export default component(GCrud);
