import React from 'react'
import { component } from 'react-garden-kit'
import { PersonContainer, PersonImage, DataContainer, QuoteDefinition, TestimonialText, Name, Direction, TextContainer, TestimonialContainerM } from '../styledComponents'
import Quote from '../../../assets/Quote'

type Props = {
    quote?: string,
    image: string | any,
    personInformation: {
        name: string,
        age: string,
    }
}

const ModalTestimonial = ({quote, image, personInformation}: Props) => <TestimonialContainerM>
    <PersonContainer>
        <PersonImage src={image} />
        <DataContainer>
        <Name>{personInformation.name}</Name>
        <Direction>{personInformation.name} mas la direccion</Direction>
        </DataContainer>
    </PersonContainer>
    <TextContainer>
    <Quote fill={'#595959'} />
    <Quote fill={'#595959'} />
    <QuoteDefinition>Best day ever</QuoteDefinition>
    <TestimonialText>{quote}</TestimonialText>
    </TextContainer>
</TestimonialContainerM>

export default component(ModalTestimonial);