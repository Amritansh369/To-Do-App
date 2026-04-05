import React from 'react';
import { useTodos } from '../context/TodoContext';
import './FilterBar.css';

const FILTERS = ['all', 'active', 'done', 'work', 'personal', 'health', 'other'];

export default function FilterBar({ filter, setFilter }) {
  const { dispatch } = useTodos();

  return (
    <div className="filter-bar">
      {FILTERS.map(f => (
        <button
          key={f}
          className={`filter-btn${filter === f ? ' active' : ''}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
      <button className="clear-btn" onClick={() => dispatch({ type: 'CLEAR_DONE' })}>
        Clear done
      </button>
    </div>
  );
}
