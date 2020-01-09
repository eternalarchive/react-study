import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

class Main extends Component {
  constructor(props) {
    super(props);

    Object.getOwnPropertyNames(Main.prototype).forEach(key => this[key] = this[key].bind(this));
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

  addStyle = id => {
    // const navChildren = e.target.parentNode.children;
    // const id = e.target.id;
    // [...navChildren].forEach(navItem => {
    //   navItem.classList.toggle('active', navItem.id === id)
    // });

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
    const { todos, navState } = this.state;
    const navItems = [ 'all', 'active', 'completed' ];
    return (
     <div className="container">
      <Header todos={todos} nav={navState}/>
      <InputTodo addTodo={this.addTodo} generateId={this.generateId}/>
      <Navigation navItems={navItems} navState={navState} addStyle={this.addStyle}/>
      <TodoList todos={todos} nav={navState} render={this.renderTodo} toggle={this.toggleTodo} remove={this.removeTodo}/>
      <Footer todos={todos} nav={navState} removeAll={this.removeTodoAll} toggleAll={this.toggleCompletedAll}/>
     </div>
    )
  };
}

export default Main;
