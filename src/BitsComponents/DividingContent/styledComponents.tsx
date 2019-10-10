import styled from 'styled-components';

export const DividerContainer = styled.div`
    display: flex;
    margin-top: 28px;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IconContainerLines = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Line = styled.div`
    height: 3px;
    width: 50px;
    background: #66C1C4;
    margin: 0 25px;
    border-radius: 2px;
`;

export const IconText = styled.p`
    color: #66c1c4;
    text-align: center;
    font-size: 16px;
    @media (min-width: 768px) {
        font-size: 18px;
    }
    @media (min-width: 1024px) {
        font-size: 22px;
    }
`;

