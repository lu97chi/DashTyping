import React from 'react'
import SlideOpen from '../SlideOpen';
import { Icon } from 'antd';
import { AText } from './styledComponents';

export const showNested = (elements:any, open:any, iconSize:any) => elements.map((item:any) => (
    <SlideOpen item={item} paddingleft={iconSize} open={open} />));
  
export const showPoper = (open:any, menu:any) => {
    const { fontSize, iconSize } = menu;
    return (
      <>
        <Icon type="search" style={{ fontSize: iconSize }} />
        { open ? <AText fontsize={fontSize} open={open}>boton</AText> : null}
      </>
    );
  };