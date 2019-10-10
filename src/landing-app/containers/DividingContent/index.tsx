import React from 'react';
import { Row, Col } from 'antd';
import DividingComponent from '../../../BitsComponents/DividingContent';
type Props = {
    configuration: {
        items: Array<{
            text: string,
            icon: any
        }>
    } // change to props
}

const DividingContent = ({configuration} : Props) => <div>
       <Row>
                <DividingComponent items={configuration.items} />
       </Row>
    </div>;

export default DividingContent;