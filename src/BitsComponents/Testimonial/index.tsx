import React, { useState } from 'react';
import { TestimonialContainer, TestimonialCard, TestimonialText, PersonContainer, PersonImage, DataContainer, ShowMore, QuoteDefinition, Name, Direction } from './styledComponents';
import { Modal } from 'antd';
import ModalTestimonial from './ModalTestimonial';

type Props = {
    quote: string,
    image: string | any,
    QuoteImage: any,
    personInformation: {
        name: string,
        age: string,
    }
}
// 10

const trunkText = (text: string) => `${text.substr(0, text.length - 10)}`

const Testimonial = ({ quote, image, personInformation, QuoteImage}:Props ) => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <TestimonialContainer>
    <TestimonialCard>
        <QuoteImage fill={'#595959'} />
        <QuoteImage fill={'#595959'} />
        <QuoteDefinition>Best day ever</QuoteDefinition>
        <TestimonialText>{quote.length > 180 ? 
            <p>{trunkText(quote)} <ShowMore onClick={() => setModalOpen(true)}>ver mas...</ShowMore></p> : quote}
        </TestimonialText>
    </TestimonialCard>
    <PersonContainer>
        <PersonImage src={image} />
        <DataContainer>
            <Name>{personInformation.name}</Name>
            <Direction>{personInformation.name}Mas la direccion</Direction>
        </DataContainer>
    </PersonContainer>
    <Modal
          visible={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
    >
        <ModalTestimonial QuoteImage={QuoteImage} quote={quote} personInformation={personInformation} image={image} />
        </Modal>
</TestimonialContainer>
    )
}

export default Testimonial;

// https://img.theculturetrip.com/768x432/wp-content/uploads/2017/09/7-reasons-to-date-a-serbian.jpg
// https://russiansbrides.com/wp-content/uploads/2019/06/Serbian-Women-1-1.jpg