import React from 'react';
import './App.css';
import Header from './Components/Header'
import Table from './Components/Table'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Table />
      </div>
    </div>
  );
}

export default App;
