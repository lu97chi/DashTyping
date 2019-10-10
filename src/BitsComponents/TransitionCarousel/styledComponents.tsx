import styled, { keyframes } from 'styled-components';
import { Icon } from 'antd';

type ContainerBase = {
    animation: boolean,
}

const TransitionFade = keyframes`
    from {
    opacity: 0;
    transform: translate3d(-5%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Carrousel = styled.div<ContainerBase>`
    animation: ${({animation}) => animation ? TransitionFade : ''} .3s ease;
`;

export const CarrouselContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;
`;

export const CarouselTitle = styled.p`
  font-size: 22px;
  text-align: center;
`;

export const CarouselText = styled.p`
  font-size: 16px;
`;

export const IconArrow = styled(Icon)`
  background: #b3e0e1;
  color: #FFFFFF;
  padding: 16px;
  font-size: 24px;
  right: 0;
  border-radius: 100%;
`;