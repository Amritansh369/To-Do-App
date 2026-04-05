import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import Stats from './components/Stats';
import AddTodo from './components/AddTodo';
import FilterBar from './components/FilterBar';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="app-wrapper">
          <div className="app">
            <Header />
            <Stats />
            <AddTodo />
            <FilterBar />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}
