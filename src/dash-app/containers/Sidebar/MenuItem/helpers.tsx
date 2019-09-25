import React from 'react'
import SlideOpen from '../SlideOpen';
import { Icon } from 'antd';
import { AText } from './styledComponents';
import { MenuNestedType, MenuType } from '../../../app.params';

export const showNested = (elements:Array<MenuNestedType>, open:boolean, iconsize:string) => elements.map((item) => (
    <SlideOpen item={item} paddingleft={iconsize} open={open} />));
  
export const showPoper = (open:boolean, menu:MenuType) => {
    const { fontsize, iconsize } = menu;
    return (
      <>
        <Icon type="search" style={{ fontSize: iconsize }} />
        { open ? <AText fontsize={fontsize} open={open}>boton</AText> : null}
      </>
    );
  };