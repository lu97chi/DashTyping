// @flow
import React, { useState } from 'react';
import { component } from 'react-garden-kit';
import {
  MenuItemContainer, TextContainer, IconA, NestedContainer,
} from './styledComponents';
import { showPoper, showNested } from './helpers';

type Props = { open: boolean, menu: any};

const MenuItem = ({ open, menu }: Props) => {
  const { nested, iconSize } = menu;
  const [nestedOpen, setNestedOpen] = useState(false);
  return (
    <div>
      <MenuItemContainer onClick={() => (nested ? setNestedOpen(!nestedOpen) : null)}>
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
          {showNested(nested, nestedOpen, iconSize)}
        </NestedContainer>
      ) : null
    }
    </div>
  );
};

export default component<Props>(MenuItem);
