import React, { useState } from 'react'
import { RiAddCircleFill } from 'react-icons/ri'
import './TodoInsert.css'

function TodoInsert({ onInsertToggle, onInsertTodo }) {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
    onInsertToggle();
  }

  return (
    <div>
      <div className='background' onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input
          placeholder='write todo' 
          value={value} 
          onChange={onChange}
        ></input>
        <button type='submit'>
          <RiAddCircleFill/>
        </button>
      </form>
    </div>
  )
}

export default TodoInsert