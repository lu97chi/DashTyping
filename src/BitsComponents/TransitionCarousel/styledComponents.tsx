import styled, { keyframes } from 'styled-components';

type ContainerBase = {
    animation: boolean,
}

const TransitionFade = keyframes`
    from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Carrousel = styled.div<ContainerBase>`
    animation: ${({animation}) => animation ? TransitionFade : ''} .3s ease;
`;