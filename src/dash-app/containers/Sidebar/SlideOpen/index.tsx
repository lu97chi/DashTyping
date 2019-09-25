// @flow
import React from 'react';
import { component } from 'react-garden-kit';
import { SlideContainer, SlideBody, TextSlideOpen } from './styledComponents';
import { MenuNestedType, themeType } from '../../../app.params';

type Props = { item: MenuNestedType, open: boolean, paddingleft: string, theme?: themeType };

const SlideOpen = ({ open, paddingleft, item, theme }: Props) => {
  const {
    name,
  } = item;
  return (
    <SlideContainer paddingleft={paddingleft} open={open}>
      <SlideBody>
        <TextSlideOpen>{name}</TextSlideOpen>
      </SlideBody>
    </SlideContainer>
  );
};

export default component<Props>(SlideOpen);
