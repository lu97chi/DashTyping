// @flow
import React, { useState, useRef, useEffect } from 'react';
import { component } from 'react-garden-kit';
import { InputA } from './styledComponents';
import { MenuItem, IconCustom } from '../../styledComponents';
import { OptionsType } from '../../../../app.params';

type Props = { option: OptionsType};

const ClickOutside = (ref: any, handler: Function) => { // refType?
  function handleClick(event: any) { // eventType?
    if (ref.current && !ref.current.contains(event.target)) {
      handler(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

const Searcher = ({
  option,
}: Props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const outsideRef = useRef(null);
  ClickOutside(outsideRef, setSearchOpen);
  const {
    icon,
  } = option;
  return (
    <div ref={outsideRef}>
      <InputA open={searchOpen} placeholder="Buscar..." />
      <MenuItem onClick={() => setSearchOpen(!searchOpen)}>
        <IconCustom type={icon} />
      </MenuItem>
    </div>
  );
};

export default component<Props>(Searcher);
