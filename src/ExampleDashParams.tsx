// import Logo from '../../resources/images/null.png';
// each propertie is a type
export const Theme = {
  primaryColor: '#1890ff', // primary color for all components
  linkColor: '#1890ff', // link color
  successColor: '#52c41a', // success state color
  warningColor: '#faad14', // warning state color
  errorColor: '#f5222d', // error state color
  fontSizeBase: '18px', // major text font size
  headingColor: 'rgba(0, 0, 0, 0.85)', // heading text color
  textColor: 'rgba(0, 0, 0, 0.65)', // major text color
  textColorSecondary: 'rgba(0, 0, 0, .45)', // secondary text color
  disabledColor: 'rgba(0, 0, 0, .25)', // disable state color
  borderRadiusBase: '4px', // major border radius
  borderColorBase: '#d9d9d9', // major border color
  boxshadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
  primaryBackgroundColor: '#001529',
  primaryHoverColor: '#E6F7FE',
  secondaryBackgroundColor: '#000C17',
  secondaryHoverColor: 'red',
  textColorLight: '#fffff0',
  textColorLightHover: '#ffffff',
};

export const HeaderData = {
  options: [
    {
      type: 'searcher',
      icon: 'search',
      col: 2,
      iconsize: '18px',
      iconcolor: Theme.textColor,
    },
    {
      type: 'tooltip',
      icon: 'user',
      text: 'Perfil',
      col: 2,
      iconsize: '18px',
      iconcolor: Theme.textColor,
    },
    {
      type: 'notification',
      icon: 'user',
      badgeBackground: Theme.primaryColor,
      badgeColor: Theme.primaryColor,
      badgeOffset: [8, -8],
      iconsize: '18px',
      iconcolor: Theme.textColor,
      notificationData: [
        {
          type: 'text',
          divider: true,
          text: 'notificacion 112',
        },
        {
          type: 'iconText',
          text: 'Correo nuevo',
          icon: 'search',
          isUser: false,
          delay: 'hace 1 dia',
          iconBackground: 'red',
          divider: true,
        },
        {
          type: 'iconText',
          text: 'Correo nuevo',
          icon: 'https://amp.insider.com/images/5d03b551daa48247765c799b-750-563.jpg',
          isUser: true,
          delay: 'hace 1 dia',
          iconBackground: 'red',
          divider: false,
        },
      ],
      notifications: 3, // erase
    },
    {
      type: 'tooltip',
      icon: 'user',
      text: 'Perfil',
      col: 2,
      iconsize: '18px',
      iconcolor: Theme.textColor,
    },
    {
      type: 'profile',
      icon: 'default',
      text: 'Luis hernandez',
      col: 4,
      iconsize: '18px',
      iconcolor: Theme.textColor,
      nested: [
        {
          text: 'Perfil',
          route: '/profile',
          icon: 'profile',
        },
        {
          text: 'Salir',
          route: '/logout',
          divider: true,
          icon: 'search',
        },
        {
          text: 'Salir2',
          route: '/logout',
          icon: 'profile',
        },
      ],
    },
  ],
};

export const SidebarData = {
  logoConfig: {
    withText: false,
    logoText: 'Texto',
    logoImg: 'https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png',
  },
  menu: [
    {
      name: 'Perfil',
      route: 'perfil2',
      icon: 'user',
      iconsize: '18px',
      fontsize: '18px',
    },
    {
      name: 'Usuario',
      icon: 'search',
      iconsize: '18px',
      fontsize: '18px',
      nested: [
        {
          name: 'Algun nombre425',
          icon: 'user',
          route: 'perfil',
        },
        {
          name: 'Algun nombre4252',
          icon: 'user',
          route: 'perfil',
        },
      ],
    },
    {
      name: 'CRUD',
      route: 'GCrud',
      icon: 'user',
      iconsize: '18px',
      fontsize: '18px',
    },
  ],
};

export const DashParams = {
    layoutConfig:{ header: true, sidebar: true}, 
    layoutData: { headerData: HeaderData, sidebarData: SidebarData}, 
    theme:Theme
}