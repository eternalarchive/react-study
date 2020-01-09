import React from 'react';
import '../../App.css';

const Footer = props => {
  return (
    <div className="footer">
      <div className="complete-all">
        <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={props.toggleCompletedAll} />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button className="btn" onClick={props.removeTodoAll}>Clear completed (<span className="completed-todos">{props.todos.filter(todo => todo.completed).length}</span>)</button>
        <strong className="active-todos">{props.todos.filter(todo => !todo.completed).length}</strong> items left
      </div>
    </div>
  )
};

export default Footer;