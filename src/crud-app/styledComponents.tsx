import styled from 'styled-components';
import { ComponentType } from 'react';

type ContainerBase = {
    boxshadow: string;
}
export const GCrudWrapper: ComponentType<any> = styled.div<ContainerBase>`
    background: #ffffff;
    padding: 24px;
    box-shadow: ${({ boxshadow }) => boxshadow} !important;
`;

export const ButtonWrapper = styled.div`
    display: flex;
`;
