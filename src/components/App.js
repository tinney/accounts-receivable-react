import React from 'react';
import './App.css';
import Header from './Header';
import Invoice from './Invoice';
import InvoiceList from './ConnectedInvoiceList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div class="sidebar">
          <InvoiceList />
        </div>
        <div class="main">
          <Route path="/invoices/:id" component={Invoice} />
        </div>
      </div>
    </Router>
  );
}

export default App;