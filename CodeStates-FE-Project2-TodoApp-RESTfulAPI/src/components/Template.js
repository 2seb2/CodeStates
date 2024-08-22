import React from 'react'
import './Template.css';

function Template({ children, todoLength }) {
  return (
    <div className='Template'>
      <div className='title'>오늘의 할 일 <span className='title-total'>{todoLength} tasks</span></div>
      <div className='children'>{children}</div>
    </div>
  )
}

export default Template;