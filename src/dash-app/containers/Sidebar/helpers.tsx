import React from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Icon, Menu } from 'antd';
import { MenuType } from '../../app.params';

const mapItems = (item:MenuType) => {
  const { nested, name } = item;
  if (nested) {
    return (
      <SubMenu
        key={name}
        title={
          <span>{name}</span>
      }
      >
        {nested.map((innerItem) => mapItems(innerItem))}
      </SubMenu>
    );
  }
  return (
    <Menu.Item key={name} onClick={() => console.log(item.route)}>
      <p>{name}</p>
    </Menu.Item>
  );
};

export const getMenuItem = (item: MenuType) => {
  const { nested, name, icon } = item;
  if (nested) {
    return (
      <SubMenu
        style={{ marginLeft: 'auto' }}
        key={`${name}-${icon}`}
        title={(
          <span>
            <Icon type={icon} />
            <span>{name}</span>
          </span>
      )}
      >
        {mapItems(item)}
      </SubMenu>
    );
  }
  return (
    <Menu.Item onClick={() => console.log(item.route)}>
      <Icon type={icon} />
      <span>{name}</span>
    </Menu.Item>
  );
};
