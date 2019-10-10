import React from 'react';
import { IconContainer, Line, IconContainerLines, IconText } from './styledComponents';
import { Col, Icon } from 'antd';

type Props = {
    items: Array<{
        text: string,
        icon: string | any
    }>,
}

const DividingContent = ({items}: Props) => <div>
    {items.map((item) => <Col xs={18} sm={10} md={8}>
      <IconContainer>
        <IconContainerLines>
          <Line />
          <Icon component={item.icon} />
          <Line />
        </IconContainerLines>
        <IconText>{item.text}</IconText>    
      </IconContainer>  
    </Col>)}
</div>;

export default DividingContent;