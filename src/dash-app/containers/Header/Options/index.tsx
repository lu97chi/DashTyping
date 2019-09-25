// @flow
import React from 'react';
import { component } from 'react-garden-kit';
import { Row, Col } from 'antd';
import { getOption } from './helpers';
import { OptionsType } from '../../../app.params';

type Props = { data: Array<OptionsType>};

const handler = (item:any) => {
  console.log(item);
};

const Options = ({
  data,
}: Props) => (
  <Row type="flex" justify="end" align="middle">
    { data.map((option,i) => (
      <Col key={`option-${i}`}  md={option.col ? option.col : 2}>
        {getOption(option, handler)}
      </Col>
    ))}
  </Row>
);

export default component<Props>(Options);
