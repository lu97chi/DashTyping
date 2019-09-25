import styled from 'styled-components';
import { ComponentType } from 'react';


type ContainerBase = {
    primaryBackgroundColor: string,
    open: boolean,
}

export const SidebarContainer:ComponentType<any> = styled.div<ContainerBase>`
    height: 100%;
    transition: .3s ease all;
    background: ${({primaryBackgroundColor}) => primaryBackgroundColor};
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    width: ${({ open }) => (open ? '200px' : '80px')}
`;
