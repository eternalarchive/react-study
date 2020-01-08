import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    Object.getOwnPropertyNames(App.prototype).forEach(key => this[key] = this[key].bind(this));
    this.state = {
      todos: [
        {
          id: 1,
          content: 'HTML',
          completed: false
        },
        {
          id: 2,
          content: 'CSS',
          completed: true
        },
        {
          id: 3,
          content: 'JavaScript',
          completed: false
        }
      ],
      navState: 'all',
    };
  }

  generateId = () => {
    return this.state.todos.length ? Math.max(...this.state.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo = e => {
    if (e.key === 'Enter') {
      this.setState({
        todos: [...this.state.todos, {
          id: this.generateId(),
          content: e.target.value,
          completed: false
        }],
      })

      e.target.value = '';
      console.log(this.state.todos);
    }

  }

  removeTodo = id => {
    const { todos } = this.state;
    console.log(id);
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })
  }

  toggleCompletedAll = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => ({ ...todo, completed: true }))
    })
  }

  removeTodoAll = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => !todo.completed)
    })
  }

  addStyle = e => {
    const navChildren = e.target.parentNode.children;
    const id = e.target.id;
    [...navChildren].forEach(navItem => {
      navItem.classList.toggle('active', navItem.id === id)
    });

    this.setState({
      navState: id,
    })
  }

  renderTodo = () => {
    const { todos, navState } = this.state;

    if (navState === 'completed') { return todos.filter(todo => todo.completed) }
    if (navState === 'active') { return todos.filter(todo => !todo.completed) }
    return todos;
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">2.0</div>

        <input
          className="input-todo"
          placeholder="What needs to be done?"
          onKeyPress={this.addTodo}
          autoFocus
        />

        <ul className="nav" onClick={this.addStyle}>
          <li id="all" className="active">All</li>
          <li id="active">Active</li>
          <li id="completed">Completed</li>
        </ul>

        <ul className="todos">
          {this.renderTodo().map(todo => <li id={todo.id} key={todo.id} className="todo-item">
            <input
              className="custom-checkbox"
              type="checkbox"
              id={`ck-${todo.id}`}
              checked={todo.completed}
              onChange={() => this.toggleTodo(todo.id)}
            />
            <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
            <i className="remove-todo far fa-times-circle" onClick={() => this.removeTodo(todo.id)}></i>
          </li>)}
        </ul>
        <div className="footer">
          <div className="complete-all">
            <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={this.toggleCompletedAll} />
            <label htmlFor="ck-complete-all">Mark all as complete</label>
          </div>
          <div className="clear-completed">
            <button className="btn" onClick={this.removeTodoAll}>Clear completed (<span className="completed-todos">{this.state.todos.filter(todo => todo.completed).length}</span>)</button>
            <strong className="active-todos">{this.state.todos.filter(todo => !todo.completed).length}</strong> items left
        </div>
        </div>
      </div>
    )
  };
}

export default App;
