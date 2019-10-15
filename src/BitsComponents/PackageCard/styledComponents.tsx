import styled from 'styled-components';

type ContainerBase = {
    top? : boolean
}

export const CardContainer = styled.div<ContainerBase>`
    width: 100%;
height: ${({top}) => top ? '457px' : '338px'};
position: relative;
padding: 8px;
`;

export const WavyContainer = styled.div`
background: linear-gradient(180deg, #66C1C4 37.5%, #FFF1F1 88.54%);
border-radius: 26px;
width: 100%;
height: 100%;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
display: flex;
flex-direction: column;
justify-content: center;
`;

export const SpecialContainer = styled.div`
    border-radius: 7px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    position: absolute;
    width: 100%;
    top:10%;
    left: 0;
    color: #66C1C4;
    font-size: 26px;
`;

export const MainTitle = styled.h3`
    font-size: 32px;
    @media (min-width: 1024px){
        font-size: 28px;
    }
    color: #FFFFFF;
    text-align: center;
`;

export const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const CheckText = styled.span`
    font-size: 18px;
`;

export const ElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;