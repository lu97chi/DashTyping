import React from 'react';
import { Parallax } from 'react-parallax';
import { DividerText, TextContainer, ChildContainer } from './styledComponents';


type Props = {
    configuration: {
        image: any,
        text?: string,
        textAlign?: string,
    }
}

const DividingImage = ({ configuration }:Props) => {
    const { textAlign, text, image } = configuration;
    return (
        <div>
            <Parallax
                bgImage={(image)}
                bgImageAlt="the cat"
                strength={200}
            >
                <TextContainer textAling={textAlign}>
                    <DividerText>{text}</DividerText>
                </TextContainer>
            </Parallax>
        </div>
    )
}

export default DividingImage;