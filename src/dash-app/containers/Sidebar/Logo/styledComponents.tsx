import styled from 'styled-components';

type ContainerBase = {
    logowidth: string,
    logoheigth: string
}

export const LogoContainer = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    cursor: pointer;
`;

export const LogoImage = styled.img<ContainerBase>`
    width: ${({logowidth}) => logowidth};
    max-height: ${({logoheigth}) => logoheigth};
`;

export const LogoText = styled.span`
    color: #ffffff;
    font-size: 18px;
    white-space: nowrap;
    margin-left: 12px;
`;
