import React from 'react';
import { SectionType } from "./landing-app/app.params";
import Logo from './landing-app/assets/Mediplasma 1.png';
import LogoMD from './landing-app/assets/MediplasmaMD.png';
import Leaf from './landing-app/assets/Lief';
import Persons from './landing-app/assets/Persons';
import Tooth from './landing-app/assets/Tooth';
import Lady from './landing-app/assets/smile-Lady.jpg'
import Man from './landing-app/assets/man.jpg'
import Quote from './landing-app/assets/Quote';
import Street from './landing-app/assets/Street';
import Phone from './landing-app/assets/Phone';
import Email from './landing-app/assets/Email';
import Facebook from './landing-app/assets/Facebook';
import Youtube from './landing-app/assets/Youtube';
import Instagram from './landing-app/assets/Instagram';
import Twitter from './landing-app/assets/Twitter';


const functionA = (data) => console.log('func A', data);

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
        QuoteImage: Quote,
        image: 'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/09/7-reasons-to-date-a-serbian.jpg',
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minus doloremque neque optio laudantium aliquid. Delectus earum saepe, assumenda recusandae alias quisquam, doloremque similique itaque voluptatum ipsa nihil, quis minima?'
    },
    {
        personInformation: {
            name: 'Melissa',
            age: '32'
        },
        QuoteImage: Quote,
        image: 'https://russiansbrides.com/wp-content/uploads/2019/06/Serbian-Women-1-1.jpg',
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minus doloremque neque optio laudantium aliquid. Delectus earum saepe, assumenda recusandae alias quisquam, doloremque similique itaque voluptatum ipsa nihil, quis minima?'
    },
    {
        personInformation: {
            name: 'Karla',
            age: '32'
        },
        QuoteImage: Quote,
        image: 'https://imgix.ranker.com/user_node_img/50059/1001171784/original/amanda-lajcaj-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos minus doloremque neque optio laudantium aliquid. Delectus earum saepe, assumenda recusandae alias quisquam, doloremque similique itaque voluptatum ipsa nihil, quis minima?'
    }
]

const sections: Array<SectionType> = [
    {
        type: "navbar",
        configuration: {
           menuConfiguration: {
               menu: ['Beneficios', 'Costos', 'Testimonio','Contacto'],
               menuPosition: 0,
           },
           logoConfiguration: {
               logo: {
                   small: Logo,
                   medium: LogoMD,
               },
               logoPosition: 1
           },
           actionsConfiguration: {
            //    externalAction, define the action to call inside the caller
            //    !externalAction, define an id, then create a switch for each case, sample:
            //    --Funciton switch--
            //     function A(id) {
            //         switch (id) {
            //                 case 'Citas2':
            //                         console.log('cita 2')
            //                         break;
            //                 default:
            //                         break;
            //         }
            // }
            //     --Function call
            // <CTAButton onClick={() => action.caller(() => A(action.id))} >{action.label}</CTAButton>
               actions: [
                //    {
                //        label: 'Citas',
                //        externalAction: true,
                //        caller: (data) => functionA(data) 
                //    },
                   {
                    label: 'Citas',
                    externalAction: false,
                    caller: (func) => func(),
                    id: 'Citas' 
                }
               ],
               actionsPosition: 2,
           }
        }
    },
    {
        type: "hero",
        configuration: {
            mainText: 'Cuidado de tu piel',
            secondaryText: 'Medicina estética y cosmética clínica'
        }
    },
    {
        type: "dividingContent",
        configuration: {
            items: [
                {
                    text: 'Servicios dentales y tratamientos de la piel',
                    icon: Leaf
                },
                {
                    text: 'Equipo y personal ampliamente capacitado',
                    icon: Leaf
                },
                {
                    text: 'Productos completamente naturales',
                    icon: Leaf
                }
            ]
        }
    },
    {
        type: "dividingImage",
        configuration: {
            image:Lady,
            text: 'Tratamientos de primer nivel',
            textAlign: 'flex-end',
        }
    },
    {
        type: "benefits",
        configuration: {
            carouselItems: [
                {
                    title: 'Plasma rico en plaquetas',
                    text: 'Es un tratamiento autológico ya que es del mismo paciente de donde se obtiene el material biológico que se suministra en la piel, un plasma con una gran concentración de plaquetas que aumentan el factor regenerativo de la piel donde se aplica'
                },
                {
                    title: 'Titulo 2',
                    text: 'Es un tratamiento autológico ya que es del mismo paciente de donde se obtiene el material biológico que se suministra en la piel, un plasma con una gran concentración de plaquetas que aumentan el factor regenerativo de la piel donde se aplica'
                },
                {
                    title: 'Titulo 3',
                    text: 'Es un tratamiento autológico ya que es del mismo paciente de donde se obtiene el material biológico que se suministra en la piel, un plasma con una gran concentración de plaquetas que aumentan el factor regenerativo de la piel donde se aplica'
                },
                {
                    title: 'Titulo 4',
                    text: 'Es un tratamiento autológico ya que es del mismo paciente de donde se obtiene el material biológico que se suministra en la piel, un plasma con una gran concentración de plaquetas que aumentan el factor regenerativo de la piel donde se aplica'
                },
                {
                    title: 'Titulo 5',
                    text: 'Es un tratamiento autológico ya que es del mismo paciente de donde se obtiene el material biológico que se suministra en la piel, un plasma con una gran concentración de plaquetas que aumentan el factor regenerativo de la piel donde se aplica'
                }
            ],
            items: [
                {
                    icon: 'check-circle',
                    text: 'Reducción de lineas de expresión'
                },
                {
                    icon: 'check-circle',
                    text: 'Minimiza las marcas de acne',
                },
                {
                    icon: 'check-circle',
                    text: 'Desintoxicación de la piel',
                },
                {
                    icon: 'check-circle',
                    text: 'Disminución de estrías y cicatrices'
                }
            ]
        }
    },
    {
        type: "pricing",
        configuration: {
            title: "Costos adecuados",
            image: Man,
            text: 'Costos adecuados',
            items: Items
        }
    },
    {
        type: "reviews",
        configuration: {
            title: "Nuestros clientes opinan",
            items: testiomonials
        }
    },
    {
        type: "contact",
        configuration: {
            contactUs: {
                title: 'Acercate a nosotros',
                socialIcons: [
                    {
                        icon: Youtube,
                        link: 'y'
                    },
                    {
                        icon: Facebook,
                        link: '262823323833276'
                    },
                    {
                        icon: Twitter,
                        link: 'twitter'
                    },
                    {
                        icon: Instagram,
                        link: 'in'
                    }
                ],
                inlineIcons: [
                    {
                        icon: Street,
                        text: 'Francisco Villa #1840'
                    },
                    {
                        icon: Phone,
                        text: '+52667 7140244'
                    },
                    {
                        icon: Email,
                        text: 'cosmopilis@tucosmopolis.com'
                    }
                ]
            },
            logo: LogoMD,
            inputLabel: 'Dános tu correo para obtener información especial'
        }
    }
];

const theme = {
    primaryColor: 'pink',
    secondaryColor: 'yellow',
    titleSize: '24px',
    subtitleSize: '18px',
    bodySize: '12px'
}

export const LandingParams = {
    sections,
    theme
}