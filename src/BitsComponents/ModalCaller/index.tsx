import React, { useState } from 'react';
import { Modal, Spin } from 'antd';
import { component } from 'react-garden-kit';
import GForm from '../GenericForm';

type Props = {
    modalOpen: boolean,
    onOk: any,
    onCancel: any,
    loading?: boolean
}

const FormConfiguration = [
    {
        label: 'Email',
        placeholder: '',
        selector: 'email',
        initialValue: '',
        cols: 24,
        type: 'string',
        extraValidations: [
          {
            type: 'pattern',
            validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: 'No cumple',
          },
        ],
      },
      {
        label: 'Numero telefonico',
        placeholder: '',
        selector: 'cellphone',
        initialValue: '',
        cols: 24,
        type: 'string',
        extraValidations: [
          {
            type: 'pattern',
            validation: /^(\(?\+?[0-9]*\)?)?[0-9]*$/,
            errorMessage: 'No cumple',
          },
          {
            type: 'required',
            validation: true,
            errorMessage: 'Por favor, ingresa un numero de contacto'
          }
        ],
      },
      {
        label: 'Nombre completo',
        placeholder: '',
        selector: 'name',
        initialValue: '',
        cols: 24,
        type: 'string',
        extraValidations: [
          {
            type: 'required',
            validation: true,
            errorMessage: 'Por favor, ingresa un nombre',
          },
        ],
      },
      {
        label: 'Fecha ',
        placeholder: '',
        selector: 'date',
        initialValue: '',
        cols: 24,
        type: 'date',
        extraValidations: [
          {
            type: 'required',
            validation: true,
            errorMessage: 'Por favor, ingresa una fecha',
          },
        ],
      },
]

const handleSumbit = (restoreHandler, sendSumbit, values) => {
  restoreHandler(false);
  sendSumbit(values)
}

const ModalCaller = ({modalOpen, onCancel, onOk, loading}: Props) => {
    const [ callingFromOutside, setCallingFromOutside ] = useState(false);
    return (
        <Modal
        title='Llena tu reservación'
        visible={modalOpen}
        onOk={() => setCallingFromOutside(true)}
        onCancel={() => onCancel()}
        >
        { modalOpen ? <GForm
            formConfig={FormConfiguration}
            showHandler={false}
            handleFromOutside={callingFromOutside}
            externalHandler={(values) => handleSumbit(setCallingFromOutside, onOk, values)}
        /> : null}
        {loading ? <Spin /> : null}
</Modal>
    )
}

export default component(ModalCaller);