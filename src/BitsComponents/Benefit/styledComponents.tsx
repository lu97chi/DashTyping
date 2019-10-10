import styled from 'styled-components';

export const BenefitContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 18px;
`;

export const Text = styled.span`
    font-size: 18px;
    margin-left: 28px;
    @media (min-width: 768px) {
        font-size: 20px
    }
    @media (min-width: 1024) {
        font-size: 22px
    }
`;
