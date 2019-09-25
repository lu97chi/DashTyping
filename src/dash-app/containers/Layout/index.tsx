import React from 'react';
import { component } from 'react-garden-kit';
import { AnimatedCol, Section } from './styledComponents';
import { Row } from 'antd';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { useLayout } from './hooks';

type Props = {
    children?: any,
    header: Boolean,
    sidebar: Boolean,
    headerData?: any,
    sidebarData: {menu: any, logoConfig: any}
   };

const Dash = ({
    children, headerData, header, sidebar, sidebarData,
  }: Props) => {
    const { openSidebar, setOpenSidebar } = useLayout();
    const { menu, logoConfig } = sidebarData;
    return (
      <div style={{ height: '100%', background: '#F0F2F5' }}>
        <div style={{ height: '100%', display: 'flex' }}>
          {sidebar ? (
            <Sidebar
              open={openSidebar}
              menu={menu}
              logoConfig={logoConfig}
            />
          ) : null}
          <div style={{ width: '100%' }}>
            {header ? (
              <Header
                options={headerData.options}
                open={openSidebar}
                setOpenSidebar={() => setOpenSidebar(!openSidebar)}
              />
            ) : null}
            <Row style={{ maxHeight: '90%', overflowY: 'auto', padding: '24px' }}>
              <AnimatedCol sm={24} style={{ zIndex: 1 }}>
                <Section>
                  {children}
                </Section>
              </AnimatedCol>
            </Row>
          </div>
        </div>
      </div>
    );
  };

export default component(Dash);