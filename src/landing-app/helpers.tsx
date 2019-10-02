import React from 'react';
import { SectionType } from './app.params';
export const GetSelector = (selector: SectionType) => {
    const {
        type
    } = selector;
    switch (type) {
        case 'navbar':
            return <div>Navbar</div>
        default:
            return <div>default</div>
    }
}