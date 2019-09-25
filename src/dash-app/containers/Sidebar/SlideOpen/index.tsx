// @flow
import React from 'react';
import { component } from 'react-garden-kit';
import { SlideContainer, SlideBody, TextSlideOpen } from './styledComponents';

type Props = { item: any, open: boolean, paddingleft: string };

const SlideOpen = ({ open, paddingleft, item }: Props) => {
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
