import React from 'react';
import { Button } from 'antd';
import { dataType } from './app.params';


type ActionsType = {
  endPoint: string, // : 'var' $ -> this format to get variable in endpoint, for example: /user/:id$/publications
  label: string,
  type: string, // CRUD options get, delete, update, create
}

type StandardColumnsType = {
  title: string,
  sort?: boolean,
  selector: string,
  type: string,
  actions?: Array<ActionsType> | any,
}

type ConfigType = {
  endPoint: string,
  type: string,
  params?:Array<String | Number>,
  data?: Object,
}

type Caller = <T>(config:ConfigType, domain: string) => Promise<T>;

type RowType = {
  title: string,
  dataIndex: string,
  render?: any, // dont know
  sorter?: any // dont know
}

export const filterData = (data: Array<dataType>, filterProp:string, filterValue: string | number) => {
  if (!filterValue) return data;
  // console.log(data.filter((row) => row.age === Number(filterValue))); // how type?
  return data.filter((row) => row[filterProp] === Number(filterValue));
};


const actionMaker = (actions:Array<ActionsType>, caller:Caller, endPoint:string, row: any) => actions.map((action) => {
  const actionObject = Object.assign(action, row);
  return (
    <Button onClick={() => caller(actionObject, endPoint)}>
      {action.label}
    </Button>
  );
});


export const ColumnMaker = (standardColumns: Array<StandardColumnsType>, caller: Caller, endPoint: string) => {
  const columns:Array<any> = [];
  standardColumns.forEach((column) => {
    const {
      title, selector, sort, type, actions = null,
    } = column;
    const row:RowType = {
      title: '',
      dataIndex: '',
    };
    if (type !== 'default') {
      row.render = (rowItem: any) => actionMaker(actions, caller, endPoint, rowItem);
    }
    if (sort) {
      row.sorter = (a:any, b:any) => a[selector] - b[selector];
    }
    row.title = title;
    row.dataIndex = selector;
    columns.push(row);
  });
  return columns;
};
