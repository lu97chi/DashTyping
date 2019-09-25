import styled from 'styled-components';
import { Button } from 'antd';
import { ComponentType } from 'react';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    
`;

type ButtonBase = {
    type: string,
}
export const AntButton:ComponentType<any> = styled(Button)<ButtonBase>`

`;