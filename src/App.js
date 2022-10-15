import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { RiAddCircleFill } from 'react-icons/ri';

let nextId = 4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할 일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할 일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할 일 3",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('할 일을 입력해주세요.');
    } else {
      const todo={
        id: nextId,
        text,
        checked: false,
      }

      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        (todo.id === id ? {...todo, checked: !todo.checked} : todo)
      )
    )
  }

  return (
    <div className='todo-container'>
      <Template todoLength={todos.length}>
        <TodoList todos={todos} onCheckToggle={onCheckToggle}/>
        <div className='add-todo-button' onClick={onInsertToggle}>
          <RiAddCircleFill/>
        </div>
        {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo}/>}
      </Template>
    </div>
  );
}

export default App;
