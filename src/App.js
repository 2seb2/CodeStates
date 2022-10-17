import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { RiAddCircleFill } from 'react-icons/ri';

let nextId = 0;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: "할 일 1",
    //   checked: true,
    // },
    // {
    //   id: 2,
    //   text: "할 일 2",
    //   checked: false,
    // },
    // {
    //   id: 3,
    //   text: "할 일 3",
    //   checked: true,
    // },
  ]);

  const onInsertToggle = () => {  // 팝업 닫고 열기 (불린값을 이용해)
    if (selectedTodo) {
      setSelectedTodo(null);
    }

    setInsertToggle(prev => !prev)
  }

  const onInsertTodo = (text) => {  // 할 일 추가
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

  const onCheckToggle = (id) => { // 할 일 체크 변환
    setTodos(todos => 
      todos.map(todo => 
        (todo.id === id ? {...todo, checked: !todo.checked} : todo)
      )
    )
  }

  const onChangeSelectedTodo = (todo) => {  // 할 일 선택
    setSelectedTodo(todo);
  }

  const onRemove = (id) => {  // 할 일 삭제
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const onUpdate = (id, text) => {  // 할 일 업데이트
    onInsertToggle();
    setTodos(todos => 
      todos.map(todo => (todo.id === id ? {...todo, text} : todo))
    );
  }

  return (
    <div className='todo-container'>
      <Template todoLength={todos.length}>
        {insertToggle && (
          <TodoInsert 
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle} 
            onInsertTodo={onInsertTodo} 
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
        <TodoList 
          todos={todos} 
          onCheckToggle={onCheckToggle} 
          onInsertToggle={onInsertToggle} 
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <div className='add-todo-button' onClick={onInsertToggle}>
          <RiAddCircleFill/>
        </div>
      </Template>
    </div>
  );
}

export default App;
