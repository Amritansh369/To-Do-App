import React from 'react';
import { useTodos } from '../context/TodoContext';
import './Stats.css';

export default function Stats() {
  const { todos } = useTodos();
  const done = todos.filter(t => t.done).length;
  const total = todos.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <>
      <div className="stats-grid">
        <div className="stat"><span className="stat-num">{total}</span><span className="stat-label">total</span></div>
        <div className="stat"><span className="stat-num">{done}</span><span className="stat-label">done</span></div>
        <div className="stat"><span className="stat-num">{total - done}</span><span className="stat-label">remaining</span></div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: pct + '%' }} />
      </div>
    </>
  );
}
