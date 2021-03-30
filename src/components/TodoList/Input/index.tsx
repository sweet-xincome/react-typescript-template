import React, { FC, useRef, ReactElement } from 'react';

import { ITodo } from '../typings';

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

    // useEffect(() => {
    //   console.log('输入框的值', val);
    // }, [val]);
  };

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入代办项" ref={inputRef} />
      <button onClick={addItem}>增加</button>
      {/* <Search placeholder="请输入代办项" allowClear enterButton="增加" size="large" onSearch={addItem} /> */}
    </div>
  );
};

export default TdInput;
