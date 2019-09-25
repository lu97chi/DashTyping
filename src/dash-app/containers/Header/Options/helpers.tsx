
import React from 'react';
import ToolTip from './Tooltip';
import Notification from './Notification';
import Searcher from './Searcher';
import Profile from './Profile';
import { OptionsType } from '../../../app.params';
// import { OptionsType } from '../../types';
export const getOption = (option: OptionsType, globalHandler: Function) => {
  switch (option.type) {
    case 'searcher':
      return (
        <Searcher
          option={option}
        />
      );
    case 'icon':
      return (
        <ToolTip
          handleClick={(optionS:OptionsType) => globalHandler(optionS)}
          option={option}
        />
      );
    case 'notification':
      return (
        <Notification
          option={option}
          handleClick={(optionS:OptionsType) => globalHandler(optionS)}
        />
      );
    case 'profile':
      return <Profile option={option} />;
    default:
      return (
        <ToolTip
          handleClick={(optionS:OptionsType) => globalHandler(optionS)}
          option={option}
        />
      );
  }
};
