import React from 'react'
import { component } from 'react-garden-kit';
import { SidebarContainer } from './styledComponents';
import { getMenuItem } from './helpers';
import Logo from './Logo';
import MenuItem from './MenuItem';
import { Menu } from 'antd';

type Props = { open: boolean, menu: Array<any>, logoConfig: Object };

const Sidebar = ({open, menu, logoConfig}:Props) =><SidebarContainer primaryBackgroundColor={'#000'} open={open}>
<Logo logo={logoConfig} open={open} />
<Menu style={{ width: 'auto' }} theme="dark" inlineCollapsed={!open} mode="vertical">
  { menu.map((menuItem) => (!open ? getMenuItem(menuItem)
    : <MenuItem menu={menuItem} open={open} />))}
</Menu>
</SidebarContainer>;

export default component(Sidebar);