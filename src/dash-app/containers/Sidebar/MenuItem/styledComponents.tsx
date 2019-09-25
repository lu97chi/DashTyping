import styled from 'styled-components';
import { Icon } from 'antd';
import { ComponentType } from 'react';

type ContainerBase = {
    textColorLight?: string,
    textColorLightHover?: string,
    open?: boolean,
    nestedOpen?: boolean,
    fontsize? :string
}
export const MenuItemContainer:ComponentType<any> = styled.div<ContainerBase>`
    transition: .3s ease all;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({textColorLight}) => textColorLight};
    cursor: pointer;
    &:hover {
        color: ${({textColorLightHover}) => textColorLightHover};
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    margin-left: 24px;
`;


export const IconA:ComponentType<any> = styled(Icon)<ContainerBase>`
    transition: .3s ease all;
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? 'block' : 'hidden')};
    transform: ${({ nestedOpen }) => (nestedOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    padding-right: 12px;
    padding-left: 12px;
`;


export const AText:ComponentType<any> = styled.span<ContainerBase>`
    transition: .3s ease all;
    opacity: ${({ open }) => (open ? 1 : 0)};
    margin-left: 12px;
    font-size: ${({ fontsize }) => fontsize};
`;


export const NestedContainer = styled.div`
    box-shadow: -12px 0px 15px 0px rgba(0,0,0,1);
`;
