import React from 'react';
import { Menu } from 'antd';
import { NotificationDataContainer } from './styledComponents';
import IconText from './IconText';

const getNotificationStyle = (notification:any) => {
  const {
    type, text, delay, icon, isUser, iconBackground,
  } = notification;
  switch (type) {
    case 'text':
      return (<NotificationDataContainer>{text}</NotificationDataContainer>);
    case 'iconText':
      return (
        <IconText
          icon={icon}
          isUser={isUser}
          delay={delay}
          text={text}
          iconBackground={iconBackground}
        />
      );
    default:
      return <p>texto</p>;
  }
};

export const makeNotificationData = (data:any) => {
  const payload:any = [];
  data.forEach((item:any) => {
    payload.push(
      <Menu.Item>
        {getNotificationStyle(item)}
      </Menu.Item>,
    );
    if (item.divider) payload.push(<Menu.Divider />);
  });
  return payload;
};
