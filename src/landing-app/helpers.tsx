import React from 'react';
import { SectionType } from './app.params';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import DividingContent from './containers/DividingContent';
import Benefits from './containers/Benefits';
import DividingImage from './containers/DividingImage';
import Pricing from './containers/Pricing';
import Testimonials from './containers/Testimonials';
import Contact from './containers/Contact';



export const GetSelector = (selector: SectionType, handler:Function) => {
    const {
        type,
        configuration
    } = selector;
    switch (type) {
        case 'navbar':
            return <Navbar menuHandler={(element) => handler(element)} Configuration={configuration}  />;
        case 'hero':
            return <Hero configuration={configuration} />;
        case 'dividingContent':
            return <DividingContent configuration={configuration} />;
        case 'benefits':
            return <Benefits configuration={configuration} />;
        case 'dividingImage':
            return <DividingImage configuration={configuration} />;
        case 'pricing':
            return <Pricing configuration={configuration} />;
        case 'reviews':
            return <Testimonials configuration={configuration} />;
        case 'contact':
            return <Contact configuration={configuration} />
        default:
            return <div>default</div>
    }
}