import React, { useState } from 'react';
import styles from './App.module.css';
import MonthsCalander from './components/MonthsCalander';
import TodoItemTable from './components/table/TodoItemTable';
import { v4 } from "uuid";

function App() {

  
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>HABIT TRACKER</h1>
        <MonthsCalander />
      </div>
      <TodoItemTable/>
    </>
  );
}

export default App;
