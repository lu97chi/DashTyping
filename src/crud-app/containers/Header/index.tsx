import React from 'react';
import { component } from 'react-garden-kit';
import {
    Typography, Modal, Button, message,
  } from 'antd';
  import { HeaderContainer, ButtonsContainer } from './styledComponents';
//   import GForm from '../../../../../../components/GenericForm';
  import { Caller } from '../../caller';
  import ActionCreatorButton from './ActionCreatorButton';
  import { useHeader } from './hooks';
import { headerButtonsType, initialConfigType } from '../../app.params';
import { Props, RequestType, SettersType } from './types';
import { ButtonsConfig } from './helpers';
  
  
  const onOk = (loading: Function, setCallingFromOutside: Function) => {
    loading(true);
    setCallingFromOutside(true);
  };
  
  // values are from the form
  const makeRequest = async (values:any, { endPoint, type, params }:RequestType, domain: string, setters: SettersType) => {
    const { setConfirmLoading, setVisible, setCallingFromOutside } = setters;
    const dataCaller = {
      endPoint,
      type,
      data: values,
      params,
    };
    if (values === 'Error') {
      setConfirmLoading(false);
      setCallingFromOutside(false);
    } else {
      const { status } = await Caller(dataCaller, domain);
      if (status >= 200 || status < 300) {
        setConfirmLoading(false);
        setVisible(false);
        setCallingFromOutside(false);
        message.success('Información guardada');
      } else {
        setConfirmLoading(false);
        setCallingFromOutside(false);
        message.error('Ocurrio un error');
      }
    }
  };
  
  const Header = ({ headerButtons, title }: Props) => {
    const {
      visible,
      setVisible,
      confirmLoading,
      setConfirmLoading,
      callingFromOutside,
      setCallingFromOutside,
      activeButtonCaller,
      setActiveButtonCaller,
      activeConfiguration,
      setActiveConfiguration,
    } = useHeader();
    const { intialConfig } = headerButtons;
    return (
      <HeaderContainer>
        <Typography.Title style={{ marginBottom: '0px' }} level={2}>{title}</Typography.Title>
        <ButtonsContainer>
          {ButtonsConfig(headerButtons, setVisible, setActiveConfiguration, setActiveButtonCaller)}
        </ButtonsContainer>
        <Modal
          title="Title"
          visible={visible}
          onOk={() => onOk(setConfirmLoading, setCallingFromOutside)}
          confirmLoading={confirmLoading}
          onCancel={() => setVisible(false)}
        >
          {
            visible ? (
              // <GForm
              //   handleFromOutside={callingFromOutside}
              //   formConfig={activeConfiguration}
              //   showHandler={false}
              //   externalHandler={(values) => makeRequest(
              //     values,
              //     activeButtonCaller,
              //     intialConfig.domain,
              //     { setConfirmLoading, setVisible, setCallingFromOutside },
              //   )}
              // />
              <div>Formulario</div>
            ) : null
          }
        </Modal>
      </HeaderContainer>
    );
  };
  
  export default component<Props>(Header);