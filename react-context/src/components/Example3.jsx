import React, { useContext } from 'react';
import PersonContext from '../contexts/PersonContext';

const Example3 = () => {
  const { persons, old } = useContext(PersonContext);
  const click = () => {
    old();
  };
  return (
    <>
      <div>{JSON.stringify(persons)}</div>
      <br />
      <button onClick={click}>1년이 지나면</button>
    </>
  );
};

export default Example3;
