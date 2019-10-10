import React from 'react';
import { SectionType } from "./landing-app/app.params";
import Logo from './landing-app/assets/Mediplasma 1.png';
import LogoMD from './landing-app/assets/MediplasmaMD.png';
import Leaf from './landing-app/assets/Lief';
import Persons from './landing-app/assets/Persons';
import Tooth from './landing-app/assets/Tooth';

const functionA = (data) => console.log('func A', data);

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