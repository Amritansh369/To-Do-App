# Todo App

A dynamic React todo app with dark/light mode.

## Getting Started

```bash
npm install
npm start
```

## File Structure

```
todo-app/
├── public/
│   └── index.html
├── src/
│   ├── context/
│   │   ├── ThemeContext.jsx   # Dark/light mode state
│   │   └── TodoContext.jsx    # Todo state + useReducer
│   ├── hooks/
│   │   └── useFilter.js       # Filter logic
│   ├── components/
│   │   ├── Header.jsx / .css
│   │   ├── Stats.jsx / .css
│   │   ├── AddTodo.jsx / .css
│   │   ├── FilterBar.jsx / .css
│   │   ├── TodoList.jsx / .css
│   │   └── TodoItem.jsx / .css
│   ├── App.jsx                # Root component
│   ├── App.css                # Theme variables
│   ├── index.js               # Entry point
│   └── index.css              # Global reset
└── package.json
```
