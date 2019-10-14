import React from 'react';
import { Row, Col } from 'antd';
import Testimonial from '../../../BitsComponents/Testimonial';
import { Title, TestimonialContainer } from './styledComponents';

type Props = {
    configuration: {
        title: string,
        items: Array<{
            personInformation:{
                name: string,
                age: string
            },
            image: any,
            quote: string,
            quoteDefinition: string,
            QuoteImage: any,
        }>
    }
}

const Testimonials = ({configuration}: Props) => {
    const { items, title } = configuration;
    return <TestimonialContainer>
        <Title>{title}</Title>
        <Row type={"flex"} justify="space-around">
            {items.map(({personInformation, QuoteImage, image, quote, quoteDefinition}) => <Col xs={20} lg={6}>
                <Testimonial QuoteImage={QuoteImage} personInformation={personInformation} quote={quote} image={image} quoteDefinition={quoteDefinition} />
            </Col>)}
        </Row>
    </TestimonialContainer>
}

export default Testimonials;