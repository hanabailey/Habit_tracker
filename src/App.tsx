import React, { useState } from 'react';
import styles from './App.module.css';
import MonthsCalander from './components/MonthsCalander';
import HabitItemTable from './components/table/HabitItemTable';
import { v4 } from "uuid";
import { DateTime } from "luxon";

function App() {
  const [month, setMonth] = useState(DateTime.now().month);
  // const daysInMonth = DateTime.local(month).daysInMonth;
  // console.log(daysInMonth)
  
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>HABIT TRACKER</h1>
        
        <MonthsCalander month={month} setMonth={setMonth}/>
      </div>
      <HabitItemTable month={month} />
    </>
  );
}

export default App;
