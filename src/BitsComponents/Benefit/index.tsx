import React from 'react';
import { Icon } from 'antd';
import { BenefitContainer, Text } from './styledComponents';

type Props = {
    icon: any,
    text: string
}

const Benefit = ({icon, text}: Props) => <BenefitContainer>
    <Icon style={{fontSize: '32px', color: '#66C1C4'}} type={icon} />
    <Text>{text}</Text>
</BenefitContainer>

export default Benefit;