type layoutConfigType = {
    header: boolean,
    sidebar: boolean
}

type layoutDataType = {
    headerData: HeaderDataType,
    sidebarData: SidebarDataType,
}

export type HeaderDataType = {
    options: Array<OptionsType>,
    fullHeigth?: string,
}

export type SidebarDataType = {
    logoConfig: LogoConfigType,
    menu: Array<MenuType>
}

export type MenuType = {
    name: string,
    route?: string,
    icon: string,
    iconsize?: string,
    fontsize?: string,
    iconcolor?: string,
    nested?: Array<MenuNestedType>
}

export type LogoConfigType = {
    withText: boolean,
    logoText?: string,
    logoTextConfig?: any,
    logoImg: string // reference to image
    logoWidth: string,
    logoHeigth: string,
}

type NotificationType = {
    type: string,
    divider? : boolean,
    text: string,
    delay?: string,
    iconBackground?: string,
    icon?: string,
    isUser?: boolean
}

export type MenuNestedType = {
    name: string,
    icon: string,
    route: string
}

export type NestedType = {
    text: string,
    route? : string,
    icon: string,
    divider?: boolean
}

export type OptionsType = {
    type: "searcher" | "tooltip" | "notification" | "profile" | string,
    icon: string, // refer to https://ant.design/components/icon/
    col?: number,
    iconsize: string,
    iconcolor: string,
    badgeBackground?: string,
    badgeColor?: string,
    badgeOffset?: Array<number>,
    notificationData?: Array<NotificationType>,
    nested?: Array<NestedType>,
    text?: string
}

export type themeType = {
    primaryColor: string, // primary color for all components
  linkColor: string, // link color
  successColor: string, // success state color
  warningColor: string, // warning state color
  errorColor: string, // error state color
  fontSizeBase: string, // major text font size
  headingColor: string, // heading text color
  textColor: string, // major text color
  textColorSecondary: string, // secondary text color
  disabledColor: string, // disable state color
  borderRadiusBase: string, // major border radius
  borderColorBase: string, // major border color
  boxshadowBase: string, // major shadow for layers
  primaryBackgroundColor: string, // primary background
  primaryHoverColor: string, // primary color when hover
  secondaryBackgroundColor: string, // secondary background
  secondaryHoverColor: string, // secondary color when hover
  textColorLight: string, // light color text
  textColorLightHover: string, // light color when hover
}

export type AppParams = {
    layoutData: layoutDataType,
    layoutConfig: layoutConfigType,
    theme: themeType,
    PropRouter:any // router type
};


