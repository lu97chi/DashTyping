import { SectionType } from "./landing-app/app.params";
import Logo from './landing-app/assets/Mediplasma 1.png';
import LogoMD from './landing-app/assets/MediplasmaMD.png';


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
               actions: ['Citas'],
               actionsPosition: 2,
           }
        }
    },
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