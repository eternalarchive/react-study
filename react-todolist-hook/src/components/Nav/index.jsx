import React from 'react';
import '../../App.css';

const Navigation = props => {
  const navItems = [ 'all', 'active', 'completed' ];
  return (
    <div>
      <ul className="nav">
        {navItems.map(navItem => {
          return (
            <li
              key={navItem}
              id={navItem}
              onClick={() => props.changeNav(navItem)}
              className={props.navState === navItem ? 'active' : null}
            >
              {navItem}
            </li>
          )
        })}
        {/* <li id="all" className="active" onClick={() => props.changeNav(navItem)}>All</li>
        <li id="active">Active</li>
        <li id="completed">Completed</li> */}
      </ul>
    </div>
  )
}

export default Navigation;