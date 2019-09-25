// @flow
import { AppParams, headerButtonsType } from './crud-app/app.params';

export const GCrudConfiguration = {
  enableFilter: true,
  title: 'Productos',
  domain: 'https://reqres.in/api',
  filterProp: 'age',
};


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
  boxshadowBase: '200px 0px 5px 3px rgba(0,0,0,0.75)', // major shadow for layers
  primaryBackgroundColor: '#001529',
  primaryHoverColor: '#E6F7FE',
  secondaryBackgroundColor: '#000C17',
  secondaryHoverColor: 'red',
  textColorLight: '#fffff0',
  textColorLightHover: '#ffffff',
};

export const FormConfiguration = [
  {
    label: 'Email',
    placeholder: 'lu97is@gmail.com',
    selector: 'email',
    initialValue: '',
    cols: 6,
    type: 'string',
    extraValidations: [
      {
        type: 'pattern',
        validation: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        errorMessage: 'No cumple',
      },
    ],
  },
  {
    label: 'Emaifdsal2',
    placeholder: 'lu97is@gmail.com',
    selector: 'name',
    initialValue: '',
    cols: 6,
    type: 'string',
    extraValidations: [
      {
        type: 'required',
        validation: true,
        errorMessage: 'Campo requerido',
      },
      {
        type: 'min',
        validation: 5,
        errorMessage: 'No cumple',
      },
    ],
  },
  {
    label: 'Contraseña2',
    placeholder: '',
    initialValue: '',
    selector: 'password',
    cols: 6,
    type: 'password',
    extraValidations: [
      {
        type: 'min',
        validation: 5,
        errorMessage: 'Muy corta',
      },
    ],
  },
  {
    label: 'Email3',
    placeholder: 'lu97is@gmail.com',
    selector: 'email3',
    initialValue: '',
    cols: 6,
    type: 'string',
    extraValidations: [
      {
        type: 'max',
        validation: 10,
        errorMessage: 'No cumple',
      },
      {
        type: 'min',
        validation: 2,
        errorMessage: 'No cumple',
      },
      {
        type: 'pattern',
        validation: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        errorMessage: 'No cumple',
      },
    ],
  },
];

export const columnsA = [
  {
    title: 'Nombre',
    selector: 'name',
    sort: true,
    type: 'default',
  },
  {
    title: 'Age',
    selector: 'age',
    sort: true,
    type: 'default',
  },
  {
    title: 'Address',
    selector: 'address',
    sort: true,
    type: 'default',
  },
  {
    title: 'Actions',
    selector: '',
    type: 'action',
    actions: [
      {
        label: 'Actualizar',
        endPoint: '/update/:name$/fdsa/:key$/fda/:age$',
        type: 'put',
      },
    ],
  },
];

export const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 1,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 2,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 3,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 4,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Red',
    age: 5,
    address: 'London No. 2 Lake Park',
  }, {
    key: '6',
    name: 'Jim Red',
    age: 6,
    address: 'London No. 2 Lake Park',
  }, {
    key: '7',
    name: 'Jim Red',
    age: 7,
    address: 'London No. 2 Lake Park',
  }, {
    key: '8',
    name: 'Jim Red',
    age: 8,
    address: 'London No. 2 Lake Park',
  }, {
    key: '9',
    name: 'Jim Red',
    age: 9,
    address: 'London No. 2 Lake Park',
  }, {
    key: '10',
    name: 'Jim Red',
    age: 10,
    address: 'London No. 2 Lake Park',
  }, {
    key: '11',
    name: 'Jim Red',
    age: 11,
    address: 'London No. 2 Lake Park',
  }, {
    key: '12',
    name: 'Jim Red',
    age: 12,
    address: 'London No. 2 Lake Park',
  }, {
    key: '13',
    name: 'Jim Red',
    age: 13,
    address: 'London No. 2 Lake Park',
  }, {
    key: '14',
    name: 'Jim Red',
    age: 14,
    address: 'London No. 2 Lake Park',
  },
];


export const ButtonsData = [
  {
    label: 'Crear',
    endPoint: '/create',
    type: 'post',
    buttonType: "ghost",
  },
  {
    label: 'Obtener todos',
    endPoint: '/users',
    type: 'get',
    buttonType: 'danger',
  },
  {
    label: 'Obtener una',
    endPoint: '/user/$$',
    type: 'get',
    params: [2],
  },
  {
    label: 'Crear con parametros',
    endPoint: '/create/$$/parametro2/$$',
    type: 'post',
    buttonType: 'primary',
    params: [12, 25],
    actionCreator: {
      label: 'Prueba',
      data: FormConfiguration,
    },
  },
];


export const ExampleParams: AppParams = {
    intialConfig: GCrudConfiguration,
    headerButtons: ButtonsData,
    data,
    columns: columnsA
};
