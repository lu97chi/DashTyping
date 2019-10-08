import React, { useState } from 'react';
import { Modal, TimePicker, Select, Checkbox, Input, Button } from 'antd';
import Caller from '../CTA';
import moment from 'moment';

const { Option, OptGroup } = Select;

const format = 'HH:mm';

const Reservation = () => {
    const [ caller, setCaller ] = useState(false);
    const [ reservation, setReservation ] = useState(); 
    return <div>
        <Button onClick={() => setCaller(true)}>Click</Button>
        <Modal
        title="Basic Modal"
        visible={caller}
        onOk={() => setCaller(false)}
        onCancel={() => setCaller(false)}
        >
         <div style={{ border: '1px solid #d9d9d9', borderRadius: 4 }}>
              <Caller />
          </div>
          <div style={{marginTop: '50px'}}>
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
          </div>
          <Select defaultValue="lucy" style={{ width: 200 }} onChange={()=> console.log('ye')}>
        <OptGroup label="Manager">
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        </OptGroup>
        <OptGroup label="Engineer">
        <Option value="Yiminghe">yiminghe</Option>
        </OptGroup>
        </Select>
        <Checkbox onChange={() => setReservation(!reservation[0])}>Checkbox</Checkbox>
        <Checkbox onChange={() => setReservation(!reservation[1])}>Checkbox</Checkbox>
        <Checkbox onChange={() => setReservation(!reservation[2])}>Checkbox</Checkbox>
        
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        </Modal>
    </div>
};

export default Reservation;