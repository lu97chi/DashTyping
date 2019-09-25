import React from 'react';
import { Menu, Icon } from 'antd';
import { NestedType } from '../../../../app.params';

export const getNested = (nested:Array<NestedType>) => {
  const nestedElements:any = [];
  nested.forEach((item, i:number) => {
    nestedElements.push(
      <Menu.Item key={i}>
        <Icon type={item.icon} />
        {item.text}
      </Menu.Item>,
    );
    if (item.divider) {
      nestedElements.push(<Menu.Divider />);
    }
  });
  return nestedElements;
};
