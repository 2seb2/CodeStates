import React from 'react'
import { RiCheckLine, RiCheckboxBlankCircleLine } from 'react-icons/ri'
import './TodoItem.css'

function TodoItem({ todo, onCheckToggle }) {
  const { id, text, checked } = todo;

  return (
    <div className='TodoItem'>
      <div 
        className={`content ${checked ? 'checked' : ''}`} 
        onClick={()=>{onCheckToggle(id)}}
      >
        {checked ? <RiCheckLine/> : <RiCheckboxBlankCircleLine/>}
        <div className='todoText'>{text}</div>
      </div>
    </div>
  )
}

export default TodoItem;