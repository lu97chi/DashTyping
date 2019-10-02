// @flow
import React, { useState } from 'react';
import { component } from 'react-garden-kit';
import {
  MenuItemContainer, TextContainer, IconA, NestedContainer,
} from './styledComponents';
import { showPoper, showNested } from './helpers';
import { MenuType, themeType } from '../../../app.params';

type Props = { open: boolean, menu: MenuType, theme: themeType};

const MenuItem = ({ open, menu, theme }: Props) => {
  const { nested, iconsize = '' } = menu;
  const [nestedOpen, setNestedOpen] = useState(false);
  const {
    textColorLight,
    textColorLightHover
  } = theme;
  return (
    <div>
      <MenuItemContainer
      textColorLightHover={textColorLightHover}
      textColorLight={textColorLight}
       onClick={() => (nested ? setNestedOpen(!nestedOpen) : null)}>
        <TextContainer>
          {showPoper(open, menu)}
        </TextContainer>
        {
      open && nested ? (
        <IconA
          type="down"
          nestedOpen={nestedOpen}
          open={open}
          onClick={() => setNestedOpen(!nestedOpen)}
        />
      )
        : null
    }
      </MenuItemContainer>
      {
      open && nested ? (
        <NestedContainer>
          {showNested(nested, nestedOpen, iconsize)}
        </NestedContainer>
      ) : null
    }
    </div>
  );
};

export default component<Props>(MenuItem);
