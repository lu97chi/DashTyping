// @flow
import React from 'react';
import { component } from 'react-garden-kit';
import { Tooltip } from 'antd';
import { MenuItem, IconCustom } from '../../styledComponents';
import { OptionsType } from '../../../../app.params';

type Props = { option: OptionsType, handleClick: Function };

const ToolTip = ({
  option, handleClick,
}: Props) => {
  const {
    text,
    icon,
    iconsize,
    iconcolor,
  } = option;
  return (
    <Tooltip placement="bottom" title={text}>
      <MenuItem onClick={() => handleClick(option)}>
        <IconCustom iconsize={iconsize} iconcolor={iconcolor} type={icon} />
      </MenuItem>
    </Tooltip>
  );
};

export default component<Props>(ToolTip);
