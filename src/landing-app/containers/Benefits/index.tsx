import React from 'react';
import { Row, Col } from 'antd';
import Benefit from '../../../BitsComponents/Benefit';
import TransitionCarrousel from '../../../BitsComponents/TransitionCarousel';

type Props = {
    configuration: {
        items: Array<{
            icon: any,
            text: string
        }>,
        carouselItems: Array<{
            title: string,
            text: string
        }>
    }
}

const Benefits = ({configuration}:Props) => <Row style={{padding: '18px'}}>
    <Col md={12} xs={24}>
        {configuration.items.map(({text, icon}) => <Col xs={24}>
            <Benefit icon={icon} text={text} />
        </Col>)}
    </Col>
    <Col md={12} xs={24} style={{background: 'red'}}>
        <TransitionCarrousel items={configuration.carouselItems} />
    </Col>
</Row>;

export default Benefits;