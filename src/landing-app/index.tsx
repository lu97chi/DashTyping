import React from 'react'
import { useAppConfig, component } from 'react-garden-kit';
import { AppParams } from './app.params';
import { GetSelector } from './helpers';
import waves from './assets/waves.svg';
import PackageCard from './bitComponents/PackageCard';
import { Row, Col } from 'antd';
import TransitionCarrousel from './bitComponents/TransitionCarousel';

const Items = [
    {
        top: false,
        mainTitle: 'Inicial',
        elements: ['Anti - Age', 'Vitamina C', 'Peptide Gold']
    },
    {
        top: true,
        mainTitle: 'PROFESIONAL',
        elements: ['Anti - Age', 'Vitamina C', 'Peptide Gold', 'BBGLOW']
    },
    {
        top: false,
        mainTitle: 'Genérico',
        elements: ['Anti - Age', 'Vitamina C', 'Peptide Gold']
    }
]

const Landing = () => {
    const { params } = useAppConfig();
    const {
        sections,
        theme
    } = params as AppParams;
    console.log(sections, theme);
    return <div>
        <Row type="flex" align="middle">
            {Items.map(({elements, mainTitle, top}, i)=> <Col xs={24} md={6}>
                <PackageCard
                    mainTitle={mainTitle}
                    top={top}
                    elements={elements}
                    />
            </Col>)}
        </Row>
        <Row>
            <TransitionCarrousel />
        </Row>
        {
            sections.map((section) => GetSelector(section))
        }
    </div>
}

export default component(Landing);