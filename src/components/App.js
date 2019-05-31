import React from 'react';
import './App.css';
import Header from './Header';
import Invoice from './Invoice';
import InvoiceList from './InvoiceList';

function App() {
  return (
    <div className="App">
      <Header />
      <InvoiceList />
      <Invoice invoiceId="1" />
    </div>
  );
}

export default App;