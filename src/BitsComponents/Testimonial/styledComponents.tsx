import styled from 'styled-components';

export const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: .3s ease all;
    margin: 16px 0;
    &:hover{
        transform: translateY(-5px);    
    }
`;

export const TestimonialContainerM = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;


export const TestimonialCard = styled.div`
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    background: #FFFFFF;
    width: 100%;
    padding: 18px;
`;

export const TestimonialText = styled.p`
    font-size: 16px;
    color: #595959;
    padding: 4px 16px;
`;

export const PersonContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 14px;
`;

export const PersonImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 18px;
`;

export const ShowMore = styled.span`
    cursor: pointer;
    color: blue;
`;

export const QuoteDefinition = styled.h3`

`;

export const Name = styled.p`
    color: #525252;
    font-size: 20px;
`;

export const Direction = styled.p`
    color: #6c6c6c;
`;

export const TextContainer = styled.div`
    margin-top: 12px;
`;

// boxshadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers