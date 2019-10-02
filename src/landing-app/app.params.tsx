
export type ThemeType = {
    primaryColor: string,
    secondaryColor: string,
    titleSize: string,
    subtitleSize: string,
    bodySize: string,
}

export type SectionType = {
    type: "navbar" | "undefined",
}

export type AppParams = {
    sections: Array<SectionType>,
    theme: ThemeType
}