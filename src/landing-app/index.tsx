import React, { useRef } from 'react'
import { useAppConfig, component } from 'react-garden-kit';
import { AppParams } from './app.params';
import { GetSelector } from './helpers';
import { Row } from 'antd';

const scrollTo = (ref) => {
    window.scroll({
        top: ref.current.offsetTop - 90,
        behavior: 'smooth'
    })
}

const generateRefs = (elements) => {
    const refs = {};
    elements.forEach(element => {
        refs[element.type] = useRef(null)
    });
    return refs;
}

const Landing = () => {
    const { params } = useAppConfig();
    const {
        sections
    } = params as AppParams;
    const refs = generateRefs(sections);
    console.log(refs);
    return <Row>
        {
            sections.map((section) => <div 
            ref={refs[section.type]} 
            style={{marginTop: '14px'}}>{GetSelector(section, (el) => scrollTo(refs[el]))
            }</div>)
        } 
    </Row>
}

export default component(Landing);