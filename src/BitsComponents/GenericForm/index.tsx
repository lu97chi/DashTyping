/* eslint-disable react/prop-types */
// @flow
import React, { useEffect } from 'react';
import { component } from 'react-garden-kit';
import {
  Form, Input, DatePicker, TimePicker, Row, Col, Button, Rate, Slider, ConfigProvider,
} from 'antd';
import {
  CheckboxGen, RadioButtonGen, RadioGen, SwitchGen, MultipleGen, UploadGen, UploadDragGen,
} from './generators';
import { FormComponentProps } from 'antd/lib/form';
import ES from 'antd/es/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('en');

const { MonthPicker, RangePicker } = DatePicker;

const injectRules = (validations = []) => validations.map(({ type, validation, errorMessage }) => (
  { [type]: validation, message: errorMessage }));

const getTagType = (field) => {
  const { type } = field;
  switch (type) {
    case 'string' || 'password':
      return <Input {...field} />;
    case 'range':
      return <RangePicker style={{ width: '100%' }} {...field} />;
    case 'month':
      return <MonthPicker style={{ width: '100%' }} {...field} />;
    case 'time':
      return <TimePicker style={{ width: '100%' }} {...field} />;
    case 'date':
      return <DatePicker style={{ width: '100%' }} {...field} />;
    case 'rate':
      return <Rate />;
    case 'checkBox':
      return CheckboxGen(field.options);
    case 'radioButton':
      return RadioButtonGen(field.options);
    case 'radio':
      return RadioGen(field.options);
    case 'slider':
      return <Slider marks={field.options} />;
    case 'switch':
      return SwitchGen(field);
    case 'multiple':
      return MultipleGen(field.options, 'multiple');
    case 'select':
      return MultipleGen(field.options, 'default');
    case 'plain':
      return <span>{field.hint}</span>;
    case 'upload':
      return UploadGen();
    case 'draggable':
      return UploadDragGen();
    default:
      return <Input {...field} />;
  }
};

const formGenerator = (fielDecorator, elements) => {
  const payload: Array<any> = [];
  elements.forEach((field) => {
    const {
      selector, initialValue, label, extraValidations, cols,
    } = field;
    payload.push(
      <Col xs={cols}>
        <Form.Item
          label={label}
          key={label}
        >
          {fielDecorator(selector, {
            initialValue,
            rules: injectRules(extraValidations),
          })(getTagType(field))}
        </Form.Item>
      </Col>,
    );
  });
  return payload;
};

const handleSave = (form, handler) => {
  form.validateFields((err, values) => {
    if (!err) {
      handler(values);
    } else {
      handler('Error');
    }
  });
};

const internalHandler = () => console.log('internal');

interface Props extends FormComponentProps {
  formConfig: Array<any>, // already given in component,
  showHandler: boolean,
  handleFromOutside: boolean,
  externalHandler: any,
  form:any,
};

const GForm = ({
  form, formConfig, externalHandler, showHandler = true, handleFromOutside = false,
}: Props) => {
  const { getFieldDecorator } = form;
  useEffect(() => {
    if (handleFromOutside) {
      handleSave(form, externalHandler);
    }
  }, [handleFromOutside]);

  return (
    <Form>
      <Row gutter={32}>
        <ConfigProvider locale={ES}>
          {formGenerator(getFieldDecorator, formConfig)}
        </ConfigProvider>
      </Row>
      {
        showHandler ? <Button onClick={() => handleSave(form, internalHandler)}>Save</Button> : null
      }
    </Form>
  );
};


export default Form.create<Props>()(component(GForm));
// Form.create()