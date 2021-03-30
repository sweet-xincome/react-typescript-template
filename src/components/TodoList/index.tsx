import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react';

import TdInput from './Input';
import TdList from './List';
import { todoReducer } from './reducer';
import { ACTION_TYPE, IState, ITodo } from './typings';

// const initialState: IState = {
//   todoList: [],
// };

function init(initialTodoList: ITodo[]): IState {
  return {
    todoList: initialTodoList,
  };
}

const TodoList: FC = (): ReactElement => {
  //   const [todoList, setTodoList] = useState<ITodo[]>([]);

  //   const [state, dispatch] = useReducer(todoReducer, initialState);
  // 惰性初始化
  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    const temp = localStorage.getItem('todolist');
    const todoList = temp ? JSON.parse(temp) : '[]';

    dispatch({
      type: ACTION_TYPE.INIT_TODOLIST,
      payload: todoList,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(state.todoList));
  }, [state.todoList]);

  const addTodo = useCallback((todo: ITodo): void => {
    // setTodoList((todoList) => [...todoList, todo]);
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo,
    });
  }, []);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id,
    });
  }, []);

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id,
    });
  }, []);

  return (
    <div className="todo-list">
      <TdInput addTodo={addTodo} todoList={state.todoList} />
      <TdList todoList={state.todoList} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoList;
