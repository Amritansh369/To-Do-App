import React from 'react';
import { useTodos } from '../context/TodoContext';
import useFilter from '../hooks/useFilter';
import TodoItem from './TodoItem';
import FilterBar from './FilterBar';
import './TodoList.css';

export default function TodoList() {
  const { todos } = useTodos();
  const { filter, setFilter, applyFilter } = useFilter();
  const visible = applyFilter(todos);

  return (
    <>
      <FilterBar filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        {visible.length === 0
          ? <p className="empty">Nothing here yet</p>
          : visible.map(t => <TodoItem key={t.id} todo={t} />)
        }
      </div>
    </>
  );
}
