import { ComponentType } from 'react';
import styled from 'styled-components';

export const Container: ComponentType<any> = styled('div')`
  max-width: 350px;
  & > form > * {
    margin-top: 30px;
  }
`;

export const ButtonContainer: ComponentType<any> = styled('div')`
  width: 100%;
  margin-top: 15px !important;
  & > * {
    margin-top: 20px;
  }
`;
