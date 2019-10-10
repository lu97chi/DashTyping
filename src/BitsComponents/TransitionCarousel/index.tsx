import React, { useState } from 'react'
import { Carrousel, CarrouselContainer, CarouselText, CarouselTitle, IconArrow } from './styledComponents';

type Props = {
    items: Array<{
        title: string,
        text: string
    }>
}
const texts = ['12341234', '43214124','4321432151231']

const handleClick = (setTransition, setActive, active) => {
    setTransition(true);
    setActive(active + 1);
}

const TransitionCarrousel = ({ items }:Props) => {
    const [ onTransition, setOnTransition ] = useState(false);
    const [ active, setActive ] = useState(0);
    return (
        <>
        <CarrouselContainer>
            <Carrousel animation={onTransition} onAnimationEnd={() => setOnTransition(false)}>
                <CarouselTitle>{items[active].title}</CarouselTitle>
                <CarouselText>{items[active].text}</CarouselText>
            </Carrousel>
            <IconArrow type="right" onClick={() => handleClick(setOnTransition, setActive, active)} />
        </CarrouselContainer>
        <div>s</div>
        </>
    )
};

export default TransitionCarrousel;