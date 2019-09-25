import styled from 'styled-components';
import { ComponentType } from 'react';

type ContainerBase = {
    open? : boolean,
    textColorLightHover?: string,
    textColorLight?: string,
    secondaryBackgroundColor?: string,
    primaryHoverColor?: string
}

export const SlideContainer:ComponentType<any> = styled.div<ContainerBase>`
    transition: .3s ease all;
    background: ${({secondaryBackgroundColor}) => secondaryBackgroundColor};
    height: ${({ open }) => (open ? '50px' : '0px')}; 
    overflow: hidden;
    cursor: pointer;
    &:hover{
        color: ${({primaryHoverColor}) => primaryHoverColor};
    }
`;

export const SlideBody = styled.div`
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    height: 100%;
    display: flex;
    padding-left: 20%;
    align-items: center;
`;

export const TextSlideOpen:ComponentType<any> = styled.span<ContainerBase>`
    color: ${({textColorLight}) => textColorLight};
    transition: .3s ease all;
    &:hover{
        color: ${({textColorLightHover}) => textColorLightHover}
    }
`;
