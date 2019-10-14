import React from 'react';
import { IconTextContainer } from './styledComponents';
import { Icon } from 'antd';

type Props = {
    icon: any,
    text: string
}

const InlineIconText = ({icon, text}:Props) => {
    return (<IconTextContainer>
        <Icon component={icon} />
        <span style={{marginLeft: '16px', fontSize: '14px'}}>{text}</span>
    </IconTextContainer>)
}

export default InlineIconText;