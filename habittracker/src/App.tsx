import React from 'react';
import './App.css';
import MonthsCalander from './components/MonthsCalander';
import TodoItemTable from './components/table/TodoItemTable';

function App() {
  const  habits= {}
  
  return (
    <>
      <div className='header'>
        <h1 className='title'>HABIT TRACKER</h1>
        <MonthsCalander />
      </div>
      <TodoItemTable />
    </>
  );
}

export default App;
