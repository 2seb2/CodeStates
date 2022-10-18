import React, { useEffect, useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { RiAddCircleFill } from 'react-icons/ri';
import useFetch from "./util/useFetch";

let nextId = 0;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([]);
  
  useEffect(()=> {
    fetch('http://localhost:3001/todos',
            {method:'GET',headers:{'Content-Type':'application/json'},})
          .then(res=>res.json())
          .then(data=> setTodos(data))
          .catch(error => console.error('Error:', error));
  }, [])

  nextId = useFetch('http://localhost:3001/todos').length;

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

      // setTodos(todos => todos.concat(todo));
      fetch(`http://localhost:3001/todos`,{
        method:'POST', 
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify(todo)
      })
      .catch(error => console.error('Error:', error));
      
      nextId++;
    }
  }


  const onCheckToggle = (id) => { // 할 일 체크 변환
    setTodos(todos => 
      todos.map(todo => 
        (todo.id === id ? {...todo, checked: !todo.checked} : todo)
      )
    )   
    // const {
    //   data
    // } = fetch(`http://localhost:3001/todos/${id}`, { 
    //   method:'GET',headers:{'Content-Type':'application/json'},
    // })
    // .catch(error => console.error('Error:', error))

    // const putData={
    //   id: nextId,
    //   text: todos[id+1].text,
    //   checked: !todos[id+1].checked,
    // }

    // fetch(`http://localhost:3001/todos/${id}`, {
    //   method : "PUT",
    //   headers: { "Content-type": "application/json" },
    //   body : JSON.stringify(putData)
    // })
    // .catch(error => console.error('Error:', error));
  }

  const onChangeSelectedTodo = (todo) => {  // 할 일 선택
    setSelectedTodo(todo);
  }

  const onRemove = (id) => {  // 할 일 삭제
    onInsertToggle();
    // setTodos(todos => todos.filter(todo => todo.id !== id));
    fetch(`http://localhost:3001/todos/${id}`,
      {method:'DELETE',headers:{'Content-Type':'application/json'},})
      .catch(error => console.error('Error:', error))
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
