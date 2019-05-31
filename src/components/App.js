import React from 'react';
import './App.css';
import Header from './Header';
import Invoice from './Invoice';
import InvoiceList from './InvoiceList';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="sidebar">
        <InvoiceList />
      </div>
      <div class="main">
        <Invoice invoiceId="1" />
      </div>
    </div>
  );
}

export default App;