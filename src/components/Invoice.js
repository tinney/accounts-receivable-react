import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, { match }) => {
  return {
    invoice: state.invoices.find(invoice => invoice.id === match.params.id)
  };
};

function Invoice(props) {
  if (props.invoice) {
    return (
      <div className="Invoice">
        <h1>Invoice</h1>
        <h1>{props.invoice.client}</h1>
      </div>
    );
  } else {
    return (
      <div className="Invoice">
        <h3>Select an invoice</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Invoice);
