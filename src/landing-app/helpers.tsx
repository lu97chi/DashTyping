import React from 'react';
import { SectionType } from './app.params';
import Navbar from './containers/Navbar';
export const GetSelector = (selector: SectionType) => {
    const {
        type,
        configuration
    } = selector;
    switch (type) {
        case 'navbar':
            return <Navbar Configuration={configuration}  />
        default:
            return <div>default</div>
    }
}