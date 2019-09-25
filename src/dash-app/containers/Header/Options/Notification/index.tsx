// @flow
import React, { useState } from 'react';
import { component } from 'react-garden-kit';
import { Dropdown, Menu } from 'antd';
import { MenuItem, IconCustom, Badge } from '../../styledComponents';
import { makeNotificationData } from './helpers';

type Props = { option: any, handleClick: any };

const Notification = ({
  option, handleClick,
}: Props) => {
  const {
    icon,
    notifications,
    iconSize,
    iconColor,
    notificationData,
  } = option;
  const [notificationState, setNotificationState] = useState(notifications);
  const { badgeColor } = option;
  return (
    <Dropdown trigger={['click']} overlay={<Menu style={{ width: '200px' }}>{makeNotificationData(notificationData)}</Menu>}>
      <MenuItem onClick={() => handleClick(option)}>
        <Badge badgeColor={badgeColor}><span>{notificationState}</span></Badge>
        <IconCustom iconSize={iconSize} iconColor={iconColor} type={icon} />
      </MenuItem>
    </Dropdown>
  );
};

export default component<Props>(Notification);
