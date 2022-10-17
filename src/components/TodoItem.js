import React from 'react'
import { RiCheckLine, RiCheckboxBlankLine } from 'react-icons/ri'
import './TodoItem.css'

function TodoItem({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) {
  const { id, text, checked } = todo;

  return (
    <div className='TodoItem'>
      <div 
        className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <RiCheckLine 
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <RiCheckboxBlankLine 
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div 
          className='todoText' 
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  )
}

export default TodoItem;