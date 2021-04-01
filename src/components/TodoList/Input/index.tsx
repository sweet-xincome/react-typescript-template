import React, { FC, useRef, ReactElement } from 'react';
import { Table } from 'antd';

import { ITodo } from '../typings';

interface ColumnsType {
  title: string;
  dataIndex: string;
  render?: (text: string) => ReactElement;
}

const columns: ColumnsType[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    // eslint-disable-next-line react/display-name
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
  // selectedRowKeys: ['2'],
  defaultSelectedRowKeys: ['1'],
};

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

type Val = string | undefined;

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void => {
    const val: Val = inputRef.current?.value.trim();
    if (val && val.length) {
      const isExist = todoList.find((todo) => todo.content === val);
      if (isExist) {
        // eslint-disable-next-line no-alert
        alert('已存在');
        return;
      }

      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false,
      });
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inputRef.current!.value = '';
    }
  };

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入代办项" ref={inputRef} />
      <button onClick={addItem}>增加</button>
      {/* <Search placeholder="请输入代办项" allowClear enterButton="增加" size="large" onSearch={addItem} /> */}
      <Table rowSelection={{ type: 'radio', ...rowSelection }} columns={columns} dataSource={data} />
    </div>
  );
};

export default TdInput;
