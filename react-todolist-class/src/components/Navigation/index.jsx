import React from 'react';
import '../../App.css';

const Navigation = props => {
  return (
    <div>
      <ul className="nav" onClick={props.addStyle}>
        <li id="all" className="active">All</li>
        <li id="active">Active</li>
        <li id="completed">Completed</li>
      </ul>
    </div>
  )
}

export default Navigation;