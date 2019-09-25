import { initialConfigType, headerButtonsType } from "../../app.params";

export type propButtonsType = {
    headerButtons: Array<headerButtonsType>,
    intialConfig: initialConfigType
  }

export type Props = { headerButtons: propButtonsType, title: String };

export type RequestType = {
    endPoint: string,
    type: string,
    params: Array<string | number>,
  }

export type SettersType = {
    setConfirmLoading: Function, 
    setVisible: Function, 
    setCallingFromOutside: Function 
  }
