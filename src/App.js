import React from 'react';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';

function App() {
  const todosItems = todosData.map(item => {
    return(
      <ToDoItem
        key={item.id}
        description={item.text}
        completed={item.completed}
      />
    )
  })
  return (
    <div className="App">
      {todosItems}
    </div>
  );
}

export default App;
