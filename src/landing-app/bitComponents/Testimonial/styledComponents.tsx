import styled from 'styled-components';

export const TestimonialContainer = styled.div`
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
    font-size: 18px;
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

// boxshadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
