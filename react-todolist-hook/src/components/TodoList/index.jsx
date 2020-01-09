import React from 'react';
import '../../App.css';

const TodoList = props => {

  return (
    <div>
      <ul className="todos">
          {props.renderTodo().map(todo => <li id={todo.id} key={todo.id} className="todo-item">
            <input
              className="custom-checkbox"
              type="checkbox"
              id={`ck-${todo.id}`}
              checked={todo.completed}
              onChange={() => props.toggleTodo(todo.id)}
            />
            <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
            <i className="remove-todo far fa-times-circle" onClick={() => props.removeTodo(todo.id)}></i>
          </li>)}
        </ul>
    </div>
  )
};

export default TodoList;