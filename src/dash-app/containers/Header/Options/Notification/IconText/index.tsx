import React from 'react';
import { NotificationDataContainer, DelayTime, AvatarC } from './styledComponents';

type IconTextType = {
  text: string, delay: string, icon: string, iconBackground: string, isUser: boolean
}

const IconText = ({
  text, delay, icon, iconBackground, isUser,
}: IconTextType) => (
  <NotificationDataContainer>
    {isUser ? <AvatarC src={icon} />
      : <AvatarC backgroundColor={iconBackground} icon="user" />}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{text}</span>
      <DelayTime>{delay}</DelayTime>
    </div>
  </NotificationDataContainer>
);

export default IconText;
