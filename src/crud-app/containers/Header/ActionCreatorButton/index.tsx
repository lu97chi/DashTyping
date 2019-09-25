import React from 'react';
import { Button } from 'antd';

const ButtonClick = (actions: Array<{handler: Function, value:any}>) => actions.forEach(({ handler, value }) => handler(value));

type SettersType = {
    setVisible: Function, 
    setActiveConfiguration: Function,
    setActiveButtonCaller: Function
}

type Props = {
    setters: SettersType,
    element: any, 
}

const ActionCreatorButton = ({ element, setters }:Props) => {
  const { label, actionCreator, buttonType } = element;
  const {
    setVisible,
    setActiveConfiguration,
    setActiveButtonCaller,
  } = setters;
  return (
    <Button
      type={buttonType}
      onClick={() => ButtonClick([
        {
          handler: setVisible,
          value: actionCreator,
        },
        {
          handler: setActiveConfiguration,
          value: actionCreator ? actionCreator.data : null,
        },
        {
          handler: setActiveButtonCaller,
          value: element,
        },
      ])}
    >
      {label}
    </Button>
  );
};

export default ActionCreatorButton;