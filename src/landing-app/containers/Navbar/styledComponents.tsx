import styled from 'styled-components';
import { device } from '../../sizes';
import { Row, Button } from 'antd';

type ContainerBase = {
    YPosition: number
}

export const NavbarContainer = styled(Row)<ContainerBase>`
    background: ${({YPosition}) => YPosition > 35 ? 'black' :'#fffff'};
    height: ${({YPosition}) => YPosition < 40 ? '60px' : '50px'};
    transition: .3s ease all;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 14px;
    color: #FFFFFF;
    top: 0;
    height: 64px;
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
    width: 100%;
    height: 100%;
`;

export const CTAButton = styled(Button)`
    background: #66C1C4;
    color: #ffffff;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 5px 10px;
    font-size: 12px;
`;

export const Menutext = styled.p`
    color: #595959;
    margin: 0 12px;
`;

export const MenuContainer = styled.div`
    display: flex;
`;

// opacity: ${({YPosition}) => YPosition * 0.0036}; hide when scrolling top

// when 0 > 1
// when 280 > 0