import React from 'react';
import './App.css';
import Months from './components/Months';
import Table from './components/table/Table';

function App() {
  const  habits= {}
  
  return (
    <div>
      <div className='header'>
        <h1 className='title'>HABIT TRACKER</h1>
        <Months />
      </div>
      <Table />
    </div>
  );
}

export default App;
