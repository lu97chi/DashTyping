import React, { useState } from 'react'
import { Carrousel } from './styledComponents';
import { Button } from 'antd';

const texts = ['12341234', '43214124','4321432151231']

const handleClick = (setTransition, setActive, active) => {
    setTransition(true);
    setActive(active + 1);
}

const TransitionCarrousel = () => {
    const [ onTransition, setOnTransition ] = useState(false);
    const [ active, setActive ] = useState(0);
    return (
        <div style={{marginLeft: '250px'}}>
            <Carrousel animation={onTransition} onAnimationEnd={() => setOnTransition(false)}>
                {texts[active]}
            </Carrousel>
            <Button onClick={() => handleClick(setOnTransition, setActive, active)}>Cicl</Button>
        </div>
    )
};

export default TransitionCarrousel;