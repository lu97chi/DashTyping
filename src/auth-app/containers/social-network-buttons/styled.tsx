import { ComponentType } from 'react';
import styled from 'styled-components';

export const Container: ComponentType<any> = styled.div`
  & > * {
    margin-top: 15px;
  }
`;
