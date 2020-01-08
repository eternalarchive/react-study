import React, { Component } from 'react';
import './App.css';

class Test extends Component {
  constructor(props) {
    super(props);

    Object.getOwnPropertyNames(Test.prototype).forEach(key => this[key] = this[key].bind(this));
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
      _todos: [],
    };
    this.state._todos = this.state.todos;
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
      this.setState({
        _todos: this.state.todos
      })
      console.log(this.state.todos);
    }
  }

  removeTodo = id => {
    const { todos } = this.state;
    console.log(id);
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
    this.setState({
      _todos: this.state.todos
    })
  }

  toggleTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    })
    this.setState({
      _todos: this.state.todos
    })
  }

  toggleCompletedAll = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => ({...todo, completed: true}))
    })
    this.setState({
      _todos: this.state.todos
    })
  }

  removeTodoAll = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => !todo.completed)
    })
    this.setState({
      _todos: this.state.todos
    })
  }

  selectState = (e) => {
    const id = e.target.id;
    const { todos } = this.state;
    this.setState({
      _todos: todos
    })
    const { _todos } = this.state;

    if (id === 'completed') {
      this.setState({
        _todos: todos.filter(todo => todo.completed)
      })
    } else if (id === 'active') {
      this.setState({
        _todos: todos.filter(todo => !todo.completed)
      })
    } else {
      console.log(todos)
      this.setState({
        _todos: todos
      })
    }
    return _todos;
  }

  addStyle = e => {
    const navChildren = e.target.parentNode.children;
    const id = e.target.id;
    [...navChildren].forEach(navItem => {
      navItem.classList.toggle('active', navItem.id === id)});

    this.setState({
      navState: id,
    })
  }

  renderTodo = () => {
    const { todos, _todos, navState } = this.state;

    if (navState === 'completed') {
      this.setState({
        _todos: todos.filter(todo => todo.completed)
      })
    } else if (navState === 'active') {
      this.setState({
        _todos: todos.filter(todo => !todo.completed)
      })
    } else {
      console.log(todos);
      this.setState({
        _todos: todos
      })
    }
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
          <li id="all" className="active" onClick={this.selectState}>All</li>
          <li id="active" onClick={this.selectState}>Active</li>
          <li id="completed" onClick={this.selectState}>Completed</li>
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
            <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={this.toggleCompletedAll}/>
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

export default Test;