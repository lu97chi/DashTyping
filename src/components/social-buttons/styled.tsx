import { ComponentType } from 'react';
import styled from 'styled-components';
type PropsButtonBase = {
  background: string;
};
export const ButtonBase: ComponentType<any> = styled.div<PropsButtonBase>`
  font-weight: 600;
  width: 100%;
  position: relative;
  min-width: 300px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  & > img {
    position: absolute;
    left: 20px;
  }
  &:hover {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;

export const CircleButton: ComponentType<any> = styled.div``;
