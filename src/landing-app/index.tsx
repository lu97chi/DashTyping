import React from 'react'
import { useAppConfig, component } from 'react-garden-kit';
import { AppParams } from './app.params';
import { GetSelector } from './helpers';
import waves from './assets/waves.svg';
import PackageCard from './bitComponents/PackageCard';
import { Row, Col } from 'antd';
import TransitionCarrousel from './bitComponents/TransitionCarousel';
import Testimonial from './bitComponents/Testimonial';
import Navbar from './containers/Navbar';
import DividingContent from './bitComponents/DividingContent';

const DividerItems = [
    {
        text: 'Servicios dentales y tratamientos de la piel',
        icon: 'search'
    },
    {
        text: 'Servicios dentales y tratamientos de la piel',
        icon: 'search'
    },
    {
        text: 'Servicios dentales y tratamientos de la piel',
        icon: 'search'
    }
]

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

const testiomonials = [
    {
        personInformation: {
            name: 'Natalia',
            age: '32'
        },
        image: 'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/09/7-reasons-to-date-a-serbian.jpg',
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minus doloremque neque optio laudantium aliquid. Delectus earum saepe, assumenda recusandae alias quisquam, doloremque similique itaque voluptatum ipsa nihil, quis minima?'
    },
    {
        personInformation: {
            name: 'Melissa',
            age: '32'
        },
        image: 'https://russiansbrides.com/wp-content/uploads/2019/06/Serbian-Women-1-1.jpg',
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minus doloremque neque optio laudantium aliquid. Delectus earum saepe, assumenda recusandae alias quisquam, doloremque similique itaque voluptatum ipsa nihil, quis minima?'
    },
    {
        personInformation: {
            name: 'Karla',
            age: '32'
        },
        image: 'https://imgix.ranker.com/user_node_img/50059/1001171784/original/amanda-lajcaj-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minus doloremque neque optio laudantium aliquid. Delectus earum saepe, assumenda recusandae alias quisquam, doloremque similique itaque voluptatum ipsa nihil, quis minima?'
    }
]

const Landing = () => {
    const { params } = useAppConfig();
    const {
        sections,
        theme
    } = params as AppParams;
    console.log(sections, theme);
    return <Row>
    {
        sections.map((section) => GetSelector(section))
    } 
</Row>
    // <div>
    //     <Navbar />
    //     <Row type="flex" align="middle">
    //         {Items.map(({elements, mainTitle, top}, i)=> <Col xs={24} md={6}>
    //             <PackageCard
    //                 mainTitle={mainTitle}
    //                 top={top}
    //                 elements={elements}
    //                 />
    //         </Col>)}
    //     </Row>
    //     <Row>
    //         <TransitionCarrousel />
    //     </Row>
    //     <Row>
    //         {testiomonials.map(({personInformation, image, quote}) => <Col md={6}>
    //             <Testimonial personInformation={personInformation} quote={quote} image={image} />
    //         </Col>)}
    //     </Row>
        // <Row>
        //     <DividingContent items={DividerItems} />
        // </Row>
    //     {/* {
    //         sections.map((section) => GetSelector(section))
    //     } */}        
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus, suscipit nostrum sed odit aperiam culpa nulla! Eaque ipsa quos accusamus doloribus error cumque amet expedita harum rerum. Ea, itaque.</p>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus, suscipit nostrum sed odit aperiam culpa nulla! Eaque ipsa quos accusamus doloribus error cumque amet expedita harum rerum. Ea, itaque.</p>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus, suscipit nostrum sed odit aperiam culpa nulla! Eaque ipsa quos accusamus doloribus error cumque amet expedita harum rerum. Ea, itaque.</p>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus, suscipit nostrum sed odit aperiam culpa nulla! Eaque ipsa quos accusamus doloribus error cumque amet expedita harum rerum. Ea, itaque.</p>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus, suscipit nostrum sed odit aperiam culpa nulla! Eaque ipsa quos accusamus doloribus error cumque amet expedita harum rerum. Ea, itaque.</p>

    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus, suscipit nostrum sed odit aperiam culpa nulla! Eaque ipsa quos accusamus doloribus error cumque amet expedita harum rerum. Ea, itaque.</p>
    // </div>
}

export default component(Landing);