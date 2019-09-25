import React from 'react'
import { component } from 'react-garden-kit';
import { Card, IconA } from './styledComponents';
import { Row, Col } from 'antd';
import Options from './Options/index';
import { OptionsType, themeType } from '../../app.params';

type Props = {
    setOpenSidebar: Function,
    options: Array<OptionsType>,
    open: boolean,
    theme: themeType
   };

   const Header = ({ setOpenSidebar, open, options, theme }: Props) => (
    <Card>
      <Row type="flex" align="middle" style={{ height: '100%' }}>
        <Col sm={6}>
          <IconA type="double-left" open={open} onClick={setOpenSidebar} />
        </Col>
        <Col sm={18}>
          <Options data={options} />
        </Col>
      </Row>
    </Card>
  );
  


export default component(Header);