import React from 'react';
import ActionCreatorButton from './ActionCreatorButton';
import { Caller } from '../../caller';
import { propButtonsType } from './types';
import { headerButtonsType } from '../../app.params';
import { AntButton } from './styledComponents';
export const ButtonsConfig = (
    { headerButtons, intialConfig }:propButtonsType,
    setVisible: Function,
    setActiveConfiguration: Function,
    setActiveButtonCaller: Function,
  ) => {
    const buttons:any = [];
    headerButtons.forEach((element: headerButtonsType) => {
      const {
        label, actionCreator, buttonType,
      } = element;
      if (actionCreator) {
        buttons.push(
          <ActionCreatorButton
            element={element}
            setters={{
              setVisible,
              setActiveConfiguration,
              setActiveButtonCaller,
            }}
          />,
        );
      } else {
        buttons.push(
          <AntButton
            onClick={() => Caller(element, intialConfig.domain)}
            type={buttonType}
          >
            {label}
          </AntButton>,
        );
      }
    });
    return buttons;
  };