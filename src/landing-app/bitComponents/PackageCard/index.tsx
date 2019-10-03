import React from 'react';
import { CardContainer, WavyContainer, SpecialContainer, MainTitle, CheckContainer, CheckText, ElementsContainer } from './styledComponents';
import { Icon } from 'antd';
import { component } from 'react-garden-kit';

type Props = {
    top: boolean,
    mainTitle: string,
    elements: Array<string>,
}

const PackageCard = ({top, mainTitle, elements}: Props) => <CardContainer top={top}>
    {top ? <SpecialContainer>ESPECIALIDAD</SpecialContainer> : null}
    <WavyContainer>
        <MainTitle>{mainTitle}</MainTitle>
        <ElementsContainer>
        {elements.map((element) => <CheckContainer>
            <Icon type="check" style={{color: '#ffffff', marginRight: '12px'}} />
            <CheckText>{element}</CheckText>
        </CheckContainer>)}
        </ElementsContainer>
    </WavyContainer>

</CardContainer>;

export default component(PackageCard);