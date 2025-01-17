import styled from 'styled-components';
import { Icon } from 'antd';
import { ComponentType } from 'react';

const fullHeight = '64px';

type ContainerBase = {
    open?: boolean,
    iconsize?: string,
    iconcolor?: string,
    badgeColor?: string,
    borderColorBase?: string,
    boxshadowBase?: string,
    fullheigth?: string,
}

export const IconA:ComponentType<any> = styled(Icon)<ContainerBase>`
    font-size: 24px;
    transition: .3s ease all;
    margin-left: 24px;
    transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
`;

export const MenuItem = styled.div<ContainerBase>`
    transition: .3s ease all;
    cursor: pointer;
    padding: 4px 14px;
    width: 100%;
    height: ${fullHeight};
    display: flex;
    align-items: center;
    &:hover{ 
        background: ${({borderColorBase}) => borderColorBase};
    }
`;

export const Card = styled.div<ContainerBase>`
    height: ${({fullheigth}) => fullheigth};
    background: #ffffff;
    box-shadow: ${({boxshadowBase}) => boxshadowBase};
    z-index: 5;
`;

export const IconCustom = styled(Icon)<ContainerBase>`
    font-size: ${({ iconsize }) => iconsize} !important;
    color: ${({ iconcolor }) => iconcolor} !important;
    margin: auto;
`;

export const Badge = styled.div<ContainerBase>`
    padding: 0px 8px;
    position: absolute;
    top: 10%;
    right: 10%;
    background: ${({ badgeColor }) => badgeColor};
    border-radius: 10px;
    color: #ffffff;
    transition: .3s ease all;
`;
