import { SectionType } from "./landing-app/app.params";

const sections: Array<SectionType> = [
    {
        type: "navbar"
    },
    {
        type: "undefined"
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