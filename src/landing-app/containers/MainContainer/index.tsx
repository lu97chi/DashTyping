import React from 'react'
import { ImageTransition } from './styledComponents'
import { useScroll } from '../Hooks/useScroll';

const MainContainer = () =>  {
    const { YPosition } = useScroll();
    return (
        <ImageTransition YPosition={YPosition}>
            <h1 style={{paddingTop: '25%', paddingLeft: '25%'}}>Texto aqui</h1>
        </ImageTransition>
    )
}



export default MainContainer;