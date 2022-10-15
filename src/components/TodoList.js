import React from 'react'
import TodoItem from './TodoItem.js'
import './TodoList.css'

function TodoList({ todos, onCheckToggle }) {
  return (
    <div className='TodoList'>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>
      ))}
    </div>
  )
}

export default TodoList;