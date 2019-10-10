import styled from 'styled-components';

type ContainerBase = {
    orientation: string
}

export const ToggleHint = styled.span<ContainerBase>`
    display: ${({ orientation }) => (orientation === 'top' || orientation === 'bottom' ? 'block' : 'inline')};
    margin-left: ${({ orientation }) => (orientation === 'right' ? '12px' : 0)}
`;
