import React from 'react';
import '../../App.css';

const InputTodo = props => {
  return (
      <input
      className="input-todo"
      placeholder="What needs to be done?"
      onKeyPress={props.addTodo}
      autoFocus
    />
  )
}

export default InputTodo;