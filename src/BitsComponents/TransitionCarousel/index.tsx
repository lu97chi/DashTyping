import React, { useState } from 'react'
import { Carrousel, CarrouselContainer, CarouselText, CarouselTitle, IconArrow, SlideSelector, SlideContainer, Dot } from './styledComponents';

type Props = {
    items: Array<{
        title: string,
        text: string
    }>
}

const handleClick = (setTransition, setActive, active, items) => {
    setTransition(true);
    if (active === items.length - 1) {
        setActive(0);
    } else {
        setActive(active + 1);

    }
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
            <IconArrow type="right" onClick={() => handleClick(setOnTransition, setActive, active, items)} />
        </CarrouselContainer>
        <SlideContainer>
            <SlideSelector>
                {items.map((item, i) => <Dot onClick={() => handleClick(setOnTransition, setActive, i - 1, items)} active={i === active} />)}
            </SlideSelector>
        </SlideContainer>
        </>
    )
};

export default TransitionCarrousel;