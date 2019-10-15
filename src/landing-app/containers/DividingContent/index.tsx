import React from 'react';
import { Row, Col } from 'antd';
import DividingComponent from '../../../BitsComponents/DividingContent';
import { DividingContainer } from './styledComponents';
type Props = {
    configuration: {
        items: Array<{
            text: string,
            icon: any
        }>
    } // change to props
}

const DividingContent = ({configuration} : Props) => <DividingContainer>
       <Row>
                <DividingComponent items={configuration.items} />
       </Row>
    </DividingContainer>;

export default DividingContent;