import { useState } from 'react';

export const FILTERS = ['all', 'active', 'done', 'work', 'personal', 'health', 'other'];

export default function useFilter() {
  const [filter, setFilter] = useState('all');

  function applyFilter(todos) {
    if (filter === 'active') return todos.filter(t => !t.done);
    if (filter === 'done') return todos.filter(t => t.done);
    if (['work', 'personal', 'health', 'other'].includes(filter))
      return todos.filter(t => t.cat === filter);
    return todos;
  }

  return { filter, setFilter, applyFilter };
}
