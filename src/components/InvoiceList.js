import React from 'react';
import { connect } from 'react-redux';
import addInvoice from '../actions';

const mapStateToProps = (state) => {
    return {
        invoices: state.invoices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addInvoice: () => {
            dispatch(addInvoice({id: 4, client: 'New Client'}))
        }
    }
}

function InvoiceList(props) { // { invoices: [], addInvoice: function }
  return(
    <ul className="InvoiceList">
      {props.invoices.map(i => {
          return (<li onClick={() => props.showInvoice(i.id)}>{i.client}</li>)
      })}
    </ul>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);