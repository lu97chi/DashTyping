import React from 'react'
import { component } from 'react-garden-kit';
import { Col } from 'antd';
import { HeroMainText, HeroContainer, HeroSecondaryText } from './styledComponents';

type Props = {
    configuration: any,
}

const Hero = ({configuration}:Props) => 
    <HeroContainer>
        <Col xs={24}>
            <HeroMainText>Cuidado de tu piel</HeroMainText>
            <HeroSecondaryText>Medicina estética y cosmética clínica</HeroSecondaryText>
        </Col>
    </HeroContainer>

export default component(Hero);