import React from 'react';
import { Calendar } from 'antd';
import moment from 'moment';
import { HeaderRender } from './helpers';

function onPanelChange(value, mode) {
  console.log(value, mode, 'from here');
}

type HeaderTypes = {
    onChange?: any,
    value: any,
    type: any,
    onTypeChange: any,
}


const Caller = () => (
  <div>
    <Calendar
      fullscreen={false}
      headerRender={({ value, type, onChange, onTypeChange }: HeaderTypes) => HeaderRender(value, type, onChange, onTypeChange)}
      onPanelChange={onPanelChange}
      onChange={(date) => console.log(moment(date).format('LL'))}
      dateCellRender={(date) => {
        const date2: string = moment(date).format('LL');
          return <div style={{width: '100%', height: '2px', background: date2 === '10 de noviembre de 2019' ? 'red' : 'yellow'}}></div>
      }}
    />
  </div>

);

export default Caller;