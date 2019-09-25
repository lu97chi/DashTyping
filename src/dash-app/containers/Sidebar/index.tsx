import React from 'react'
import { component } from 'react-garden-kit';
import { SidebarContainer } from './styledComponents';
import { getMenuItem } from './helpers';
import Logo from './Logo';
import MenuItem from './MenuItem';
import { Menu } from 'antd';
import { LogoConfigType, MenuType, themeType } from '../../app.params';

type Props = { open: boolean, menu: Array<MenuType>, logoConfig: LogoConfigType, theme:themeType };

const Sidebar = ({open, menu, logoConfig, theme}:Props) =><SidebarContainer primaryBackgroundColor={theme.primaryBackgroundColor} open={open}>
<Logo logo={logoConfig} open={open} />
<Menu style={{ width: 'auto' }} theme="dark" inlineCollapsed={!open} mode="vertical">
  { menu.map((menuItem) => (!open ? getMenuItem(menuItem)
    : <MenuItem theme={theme} menu={menuItem} open={open} />))}
</Menu>
</SidebarContainer>;

export default component(Sidebar);