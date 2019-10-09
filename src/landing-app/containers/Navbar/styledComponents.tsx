import styled from 'styled-components';
import { device } from '../../sizes';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { Row } from 'antd';

type ContainerBase = {
    YPosition: number
}

export const NavbarContainer = styled(Row)<ContainerBase>`
    background: ${({YPosition}) => YPosition > 35 ? '#FFD0D0' :'#ffffff'};
    height: ${({YPosition}) => YPosition < 40 ? '98px' : '90px'};
    transition: .3s ease all;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px;
    color: #FFFFFF;
    top: 0;
    z-index: 10;
`;

export const ItemMenu = styled.span`
    user-select: none;
    cursor: pointer;
`;

export const ImageSidebar = styled.img`
    width: 100%;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MNav = styled.div`
    @media ${device.laptop} {
        display: none;
    }
`;

export const LogoImage = styled.img`
    width: 90%;
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
        padding: 5px 14px;
        font-size: 12px;
    }
    @media ${device.mobileS} {
        padding: 5px 14px;
        font-size: 12px;
    }
    @media ${device.laptop} {
        padding: 5px 24px;
        font-size: 16px;
    }
    @media ${device.desktop} {
        padding: 5px 24px;
        font-size: 16px;
    }
    @media ${device.tablet} {
        padding: 5px 24px;
        font-size: 16px;
    }
`;

export const Menutext = styled(Texty)`
    color: #595959;
    margin: 0 12px;
`;

export const MenuContainer = styled.div`
    display: flex;
`;

// opacity: ${({YPosition}) => YPosition * 0.0036}; hide when scrolling top

// when 0 > 1
// when 280 > 0