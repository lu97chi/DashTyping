import styled from 'styled-components';
import { device } from '../../sizes';

type ContainerBase = {
    YPosition: number
}

export const NavbarContainer = styled.div<ContainerBase>`
    background: ${({YPosition}) => YPosition > 35 ? 'black' :'red'};
    height: ${({YPosition}) => YPosition < 40 ? '60px' : '50px'};
    transition: .3s ease all;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 14px;
    color: #FFFFFF;
    top: 0;
`;

export const ItemMenu = styled.span`
    user-select: none;
    cursor: pointer;
`;

export const ImageSidebar = styled.img`
    height: 80px;
    width: 80px;
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
`;



// opacity: ${({YPosition}) => YPosition * 0.0036}; hide when scrolling top

// when 0 > 1
// when 280 > 0