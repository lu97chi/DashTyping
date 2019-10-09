import { SectionType } from "./landing-app/app.params";
import Logo from './landing-app/assets/Mediplasma 1.png';
import LogoMD from './landing-app/assets/MediplasmaMD.png';

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