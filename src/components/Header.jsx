import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function Header() {
  const { dark, toggle } = useTheme();
  const now = new Date();
  const dateStr = `${DAYS[now.getDay()]}, ${MONTHS[now.getMonth()]} ${now.getDate()}`;

  return (
    <div className="header">
      <div>
        <h1 className="header-title">My tasks</h1>
        <p className="header-date">{dateStr}</p>
      </div>
      <button className="theme-btn" onClick={toggle} title="Toggle theme">
        {dark ? '☀' : '☾'}
      </button>
    </div>
  );
}
