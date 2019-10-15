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
    margin-top: 90px;
    background: pink;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 70vh;
    flex-direction: column;
        padding: 0 24px;
`;

export const CTAButton = styled.button`
    background: #66C1C4;
    color: #ffffff;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: .3s ease all;
    &:hover {
        background: #ffffff;
        color: #66C1C4;
    }
    cursor: pointer;
    @media ${device.mobileM} {
        padding: 5px 18px;
        font-size: 16px;
    }
    @media ${device.mobileS} {
        padding: 5px 18px;
        font-size: 16px;
    }
    @media ${device.laptop} {
        padding: 5px 28px;
        font-size: 22px;
    }
    @media ${device.desktop} {
        padding: 5px 28px;
        font-size: 22px;
    }
    @media ${device.tablet} {
        padding: 5px 28px;
        font-size: 22px;
    }
`;