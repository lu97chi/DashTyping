import styled from 'styled-components';
import { Col } from 'antd';

export const AnimatedCol = styled(Col)`
    transition: .3s ease all;
    height: 100%;
`;

export const Section = styled.div`
    height: 100%;
    overflow-y: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

`;
