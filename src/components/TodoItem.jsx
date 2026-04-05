import React from 'react';
import { useTodos } from '../context/TodoContext';
import './TodoItem.css';

const CAT_LABELS = { work: 'Work', personal: 'Personal', health: 'Health', other: 'Other' };

export default function TodoItem({ todo }) {
  const { dispatch } = useTodos();
  const { id, text, cat, pri, done } = todo;

  return (
    <div className={`todo-item${done ? ' done' : ''}`}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => dispatch({ type: 'TOGGLE', id })}
        className="todo-check"
      />
      <span className={`pri-dot pri-${pri}`} />
      <span className="todo-text">{text}</span>
      <span className={`cat-badge cat-${cat}`}>{CAT_LABELS[cat]}</span>
      <button className="del-btn" onClick={() => dispatch({ type: 'DELETE', id })}>×</button>
    </div>
  );
}
