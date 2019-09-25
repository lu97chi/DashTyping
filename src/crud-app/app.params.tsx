export type initialConfigType = {
    enableFilter: boolean,
    title: string,
    domain: string,
    filterProp: string,
}

type actionsType = {
    label: string,
    endPoint: string,
    type: string,
}

type columnsType = {
    title: string,
    selector: string,
    sort?: boolean,
    type: string,
    actions?: Array<actionsType>,
}

export type dataType = {
    [key: string] : string | number // must match each key in selectors columns
}

type extraValidations = {
    type: string, // key of the validation,  refer to https://ant.design/components/form/  validation rules
    validation: any,
    errorMessage: string
}

type formType = {
    label: string,
    placeholder?: string,
    selector: string,
    initialValue?: any,
    cols: number, // total of 24
    required?: boolean,
    type: string,
    extraValidations? : Array<extraValidations>,
}

type actionCreatorType = {
    label: string,
    data: Array<formType>,
}

export type headerButtonsType = {
    label: string,
    endPoint: string, 
    // two way paramete:
    // $$ where the exact index array value is
    // :'var'$ where the matching object key value is
    // example: update/$$/user --> get first index of params property
    // example: update/:name$/user --> get the matching key value property
    type: string, // Crud operation
    buttonType?: "link" | "default" | "ghost" | "primary" | "dashed" | "danger" | string,
    actionCreator?: actionCreatorType,
}

export type AppParams = {
    intialConfig: initialConfigType,
    columns: Array<columnsType>,
    data: Array<dataType>,
    headerButtons: Array<headerButtonsType>,
}