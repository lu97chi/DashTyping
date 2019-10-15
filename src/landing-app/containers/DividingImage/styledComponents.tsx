import styled from 'styled-components';

type ContainerBase = {
    textAling?: string
}

export const DividerText = styled.p`
    
    text-align: center;
    color: #ffffff;
    font-size: 32px;
    @media (min-width: 768px) {
        font-size: 36px
    }
    @media (min-width: 1024) {
        font-size: 40px
    }
`;

export const TextContainer = styled.div<ContainerBase>`
    display: flex; 
    align-items: ${({textAling}) => textAling};
    justify-content: center;
    height: 50vh;
`;

export const ChildContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 40vh;
    background: linear-gradient(180deg, rgba(255, 208, 208, 0) 33.33%, #FFD0D0 100%)
`;
