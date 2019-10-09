import React from 'react';
import { Modal } from 'antd';
import { component } from 'react-garden-kit';

type Props = {
    modalOpen: boolean,
    onOk: Function,
    onCancel: Function
}

const ModalCaller = ({modalOpen, onCancel, onOk}: Props) => <Modal
        title='Llena tu reservación'
        visible={modalOpen}
        onOk={() => onOk()}
        onCancel={() => onCancel()}
        >
            <div>fdsa</div>
</Modal>

export default component(ModalCaller);