import React from 'react';
import '../../App.css';

const TodoList = props => {

  return (
    <di>
      <ul className="todos">
          {props.render().map(todo => <li id={todo.id} key={todo.id} className="todo-item">
            <input
              className="custom-checkbox"
              type="checkbox"
              id={`ck-${todo.id}`}
              checked={todo.completed}
              onChange={() => props.toggle(todo.id)}
            />
            <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
            <i className="remove-todo far fa-times-circle" onClick={() => props.remove(todo.id)}></i>
          </li>)}
        </ul>
    </di>
  )
};

export default TodoList;