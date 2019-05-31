import React from 'react';

function InvoiceList(props) { // { invoices: [], addInvoice: function }
  return(
    <ul className="InvoiceList">
      {props.invoices.map(i => {
          return (<li key={i.id} onClick={() => props.showInvoice(i.id)}>{i.client}</li>)
      })}
    </ul>
  );
}

export default InvoiceList;