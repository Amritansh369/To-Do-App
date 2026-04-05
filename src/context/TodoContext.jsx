import React, { createContext, useContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

const INITIAL = [
  { id: 1, text: 'Review project proposal', cat: 'work', pri: 'high', done: false },
  { id: 2, text: 'Morning workout', cat: 'health', pri: 'med', done: false },
  { id: 3, text: 'Buy groceries', cat: 'personal', pri: 'low', done: true },
  { id: 4, text: 'Read for 30 minutes', cat: 'personal', pri: 'low', done: false },
];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [{ id: Date.now(), ...action.payload, done: false }, ...state];
    case 'TOGGLE':
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    case 'DELETE':
      return state.filter(t => t.id !== action.id);
    case 'CLEAR_DONE':
      return state.filter(t => !t.done);
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    try {
      const saved = localStorage.getItem('todos-app');
      return saved ? JSON.parse(saved) : INITIAL;
    } catch { return INITIAL; }
  });

  useEffect(() => {
    localStorage.setItem('todos-app', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);
