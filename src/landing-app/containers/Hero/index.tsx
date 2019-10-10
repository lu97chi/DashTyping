import React from 'react'
import { component } from 'react-garden-kit';
import { HeroMainText, HeroContainer, HeroSecondaryText } from './styledComponents';

type Props = {
    configuration: {
        mainText: string,
        secondaryText: string
    },
}

const Hero = ({configuration}:Props) => 
    <HeroContainer>
            <HeroMainText>{configuration.mainText}</HeroMainText>
            <HeroSecondaryText>{configuration.secondaryText}</HeroSecondaryText>
    </HeroContainer>

export default component(Hero);