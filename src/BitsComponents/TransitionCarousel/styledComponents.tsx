import styled, { keyframes } from 'styled-components';
import { Icon } from 'antd';

type ContainerBase = {
    animation?: boolean,
    active?: boolean
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
`;

export const CarouselTitle = styled.p`
  font-size: 36px;
  text-align: center;
  margin-bottom: 12px;
`;

export const CarouselText = styled.p`
  font-size: 20px;
  @media (min-width: 768px) {
    border-left: 3px solid #66C1C4;
    padding-left: 34px;
  }
`;

export const IconArrow = styled(Icon)`
  background: #b3e0e1;
  color: #FFFFFF;
  padding: 16px;
  font-size: 24px;
  right: 0;
  border-radius: 100%;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;

export const SlideSelector = styled.div`
    height: 20px;
    background: #66C1C4;
    border-radius: 10px;
    width: 200px;
    display: flex; 
    align-items: center;
    justify-content: center;
`;


export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Dot = styled.div<ContainerBase>`
  width: ${({active})=> active ? '10px': '7px'};
  height: ${({active})=> active ? '10px': '7px'};
  border-radius: 100%;
  background: #ffffff;
  transition: .3s ease all;
  margin: 0 6px;
  cursor: pointer;
`;
