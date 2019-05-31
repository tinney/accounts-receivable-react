import React from 'react';

function Invoice(props) {
  return(
    <div className="Invoice">
      <h1>Invoice</h1>
      <h2>Name: {props.invoiceId}</h2>
    </div>
  );
}

export default Invoice;