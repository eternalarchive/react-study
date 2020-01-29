import React from 'react';
import PersonContext from '../contexts/PersonContext';

export default class Example2 extends React.Component {
  static contextType = PersonContext;

  render() {
    return (
      <div>{JSON.stringify(this.context)}</div>
    )
  }
}