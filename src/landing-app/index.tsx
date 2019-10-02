import React from 'react'
import { useAppConfig, component } from 'react-garden-kit';
import { AppParams } from './app.params';
import { GetSelector } from './helpers';

const Landing = () => {
    const { params } = useAppConfig();
    const {
        sections,
        theme
    } = params as AppParams;
    console.log(sections, theme);
    return <div>Initial
        {
            sections.map((section) => GetSelector(section))
        }
    </div>
}

export default component(Landing);