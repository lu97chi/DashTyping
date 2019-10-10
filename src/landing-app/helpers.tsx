import React from 'react';
import { SectionType } from './app.params';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import DividingContent from './containers/DividingContent';
export const GetSelector = (selector: SectionType) => {
    const {
        type,
        configuration
    } = selector;
    switch (type) {
        case 'navbar':
            return <Navbar Configuration={configuration}  />
        case 'hero':
            return <Hero configuration={configuration} />
        case 'dividingContent':
            return <DividingContent configuration={configuration} />
        default:
            return <div>default</div>
    }
}