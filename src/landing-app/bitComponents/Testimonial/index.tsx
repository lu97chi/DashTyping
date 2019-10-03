import React, { useState } from 'react';
import { TestimonialContainer, TestimonialCard, TestimonialText, PersonContainer, PersonImage, DataContainer, ShowMore } from './styledComponents';
import Quote from '../../assets/Quote'
import { Icon, Modal } from 'antd';

type Props = {
    quote: string,
    image: string | any,
    personInformation: {
        name: string,
        age: string,
    }
}
// 10

const trunkText = (text: string) => `${text.substr(0, text.length - 10)}`

const Testimonial = ({ quote, image, personInformation}:Props ) => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <TestimonialContainer>
    <TestimonialCard>
        <Quote fill={'#595959'} />
        <Quote fill={'#595959'} />
        <TestimonialText>{quote.length > 180 ? 
            <p>{trunkText(quote)} <ShowMore onClick={() => setModalOpen(true)}>ver mas...</ShowMore></p> : quote}
        </TestimonialText>
    </TestimonialCard>
    <PersonContainer>
        <PersonImage src={image} />
        <DataContainer>
            <p>{personInformation.name}</p>
            <p>{personInformation.name}</p>
            <Icon type="twitter" />
        </DataContainer>
    </PersonContainer>
    <Modal
          visible={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        ></Modal>
</TestimonialContainer>
    )
}

export default Testimonial;

// https://img.theculturetrip.com/768x432/wp-content/uploads/2017/09/7-reasons-to-date-a-serbian.jpg
// https://russiansbrides.com/wp-content/uploads/2019/06/Serbian-Women-1-1.jpg