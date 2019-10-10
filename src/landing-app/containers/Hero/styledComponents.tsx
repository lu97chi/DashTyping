import styled from 'styled-components';
import { device } from '../../sizes';

export const HeroMainText = styled.p`
    margin-bottom: 14px;
    font-size: 32px;
    @media ${device.mobileL} {
        font-size: 48px;
    }
    @media ${device.laptop} {
        font-size: 96px;
    }
`;

export const HeroSecondaryText = styled.p`
    font-size: 16px;
    @media ${device.mobileL} {
        font-size: 24px;
    }
    @media ${device.laptop} {
        font-size: 48px;
    }
`;

export const HeroContainer = styled.div`
    margin-top: 98px;
    background: pink;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 60vh;
    flex-direction: column;
        padding: 0 24px;
`;