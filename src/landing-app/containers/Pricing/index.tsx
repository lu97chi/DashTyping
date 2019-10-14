import React from 'react';
import { Row, Col } from 'antd';
import PackageCard from '../../../BitsComponents/PackageCard';
import { Container } from './styledComponents';

type Props = {
    configuration: {
        image: any,
        text: string,
        items: Array<{
            top: boolean,
            mainTitle: string,
            elements: Array<string>
        }>
    }
}

const Pricing = ({configuration}: Props) => {
    const { items } = configuration;
    return (<Container>
        Costos adecuados
        
        <Row type="flex" align="middle" justify="center">
            {items.map(({top, mainTitle, elements}) => <Col xs={20} lg={5}>
                <PackageCard  mainTitle={mainTitle} top={top} elements={elements} />
            </Col>)}
        </Row>
    </Container>)
}

export default Pricing;