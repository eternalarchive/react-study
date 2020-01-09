import React from 'react';
import '../../App.css';

const Navigation = props => {
  const { navItems, addStyle, navState } = props;
  console.log(navState);
  return (
    <div>
      <ul className="nav">
        {
          navItems.map(navItem => {
            return (
              <li
                id={navItem}
                key={navItem}
                className={navState === navItem ? 'active' : null}
                onClick={() => addStyle(navItem)}
              >
                {navItem}
              </li>
            )
          })
        }
        {/* <li id="all" className="active" onClick={addStyle}>All</li>
        <li id="active" onClick={addStyle}>Active</li>
        <li id="completed" onClick={addStyle}>Completed</li> */}
      </ul>
    </div>
  )
}

export default Navigation;