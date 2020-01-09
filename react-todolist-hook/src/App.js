import React, { useState } from 'react';

import Header from './components/Header';
import InputTodo from './components/InputTodo';
import Nav from './components/Nav';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'HTML',
      completed: true,
    },
    {
      id: 2,
      content: 'CSS',
      completed: false,
    },
    {
      id: 3,
      content: 'JavaScript',
      completed: false,
    }
  ]);
  const [navState, setNavState] = useState('all');

  const generateId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }

  const addTodo = e => {
    const todo = {
      id: generateId(),
      content: e.target.value,
      completed: false
    }

    if (e.key === 'Enter') {
      setTodos(todos => [...todos, todo]);
      e.target.value = '';
    }
  }

  const removeTodo = id => {
    console.log(id);
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const toggleTodo = id => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  const toggleCompletedAll = () => {
    setTodos(todos => todos.map(todo => ({ ...todo, completed: true })));
  }

  const removeTodoAll = () => {
    setTodos(todos => todos.filter(todo => !todo.completed));
  }

  const changeNav = id => {
    setNavState(id);
  }

  const renderTodo = () => {
    if (navState === 'completed') { return todos.filter(todo => todo.completed) }
    if (navState === 'active') { return todos.filter(todo => !todo.completed) }
    return todos;
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodo={addTodo}/>
      <Nav navState={navState} changeNav={changeNav}/>
      <TodoList todos={todos} renderTodo={renderTodo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      <Footer todos={todos} toggleCompletedAll={toggleCompletedAll} removeTodoAll={removeTodoAll}/>
    </div>
  );
}

export default App;
