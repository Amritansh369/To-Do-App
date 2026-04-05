import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import './AddTodo.css';

export default function AddTodo() {
  const { dispatch } = useTodos();
  const [text, setText] = useState('');
  const [cat, setCat] = useState('work');
  const [pri, setPri] = useState('med');

  function handleAdd() {
    if (!text.trim()) return;
    dispatch({ type: 'ADD', payload: { text: text.trim(), cat, pri } });
    setText('');
  }

  return (
    <div className="add-row">
      <input
        className="add-input"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        placeholder="Add a new task..."
      />
      <select className="add-select" value={cat} onChange={e => setCat(e.target.value)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="health">Health</option>
        <option value="other">Other</option>
      </select>
      <select className="add-select" value={pri} onChange={e => setPri(e.target.value)}>
        <option value="high">High</option>
        <option value="med">Med</option>
        <option value="low">Low</option>
      </select>
      <button className="add-btn" onClick={handleAdd}>+ Add</button>
    </div>
  );
}
