import React from 'react';
import { DividerContainer, IconContainer } from './styledComponents';
import { Row, Col, Icon } from 'antd';
import { component } from 'react-garden-kit';

type Props = {
    items: Array<{
        text: string,
        icon: string | any
    }>,
}

const DividingContent = ({items}: Props) => <DividerContainer>
    {items.map((item) => <Col xs={22} md={8}>
      <IconContainer>
        <Icon type="search" />
        <p>{item.text}</p>    
      </IconContainer>  
    </Col>)}
</DividerContainer>;

export default component(DividingContent);