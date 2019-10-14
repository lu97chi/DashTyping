import React from 'react';
import { Row, Col } from 'antd';
import PackageCard from '../../../BitsComponents/PackageCard';
import { Container, Title } from './styledComponents';

type Props = {
    configuration: {
        image: any,
        text: string,
        title: string,
        items: Array<{
            top: boolean,
            mainTitle: string,
            elements: Array<string>
        }>
    }
}

const Pricing = ({configuration}: Props) => {
    const { items, title } = configuration;
    return (<Container>
        <Title>{title}</Title>
        
        <Row type="flex" align="middle" justify="center">
            {items.map(({top, mainTitle, elements}) => <Col xs={20} lg={5}>
                <PackageCard  mainTitle={mainTitle} top={top} elements={elements} />
            </Col>)}
        </Row>
    </Container>)
}

export default Pricing;