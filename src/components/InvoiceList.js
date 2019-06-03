import React from "react";
import { connect } from "react-redux";
import { showInvoice } from "../actions";

const mapStateToProps = state => {
  return {
    invoices: state.invoices
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showInvoice: invoiceId => {
      dispatch(showInvoice(invoiceId));
    }
  };
};

function InvoiceList(props) {
  return (
    <ul className="InvoiceList">
      {props.invoices.map(i => {
        return (
          <li key={i.id} onClick={() => props.showInvoice(i.id)}>
            {i.client}
          </li>
        );
      })}
    </ul>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceList);
