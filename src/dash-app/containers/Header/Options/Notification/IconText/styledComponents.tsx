import styled from 'styled-components';
import { Avatar } from 'antd';

type ContainerBase = {
    src?: string | any,
    icon?: string | any,
    backgroundColor? : string
}

export const NotificationDataContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px; 
`;

export const DelayTime = styled.span`
    font-size: 12px;
    color: rgba(0,0,0,.45);
`;

export const AvatarC = styled(Avatar)<ContainerBase>`
    margin-right: 12px !important;
    background-color:${({backgroundColor}) => backgroundColor}
`;
