import styled from 'styled-components';

type ContainerBase = {
    YPosition: any
}

export const ImageTransition = styled.div<ContainerBase>`
    margin-top: 50px;
    opacity: ${({YPosition}) => (580 - YPosition) / 580}; 
    height: 580px;
    width: 100%;
    background-image: url('https://cdn.pixabay.com/photo/2016/06/17/06/04/background-1462755_960_720.jpg');
`;
