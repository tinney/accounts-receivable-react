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
        <h2>{props.invoice.client} Invoice</h2>
        <div>
          <strong>Attn: </strong>
          {props.invoice.attn}
        </div>
        <div>
          <strong>Due Date: </strong>
          {props.invoice.due_date}
        </div>
        <div>
          <strong>Notes: </strong>
          {props.invoice.notes}
        </div>
        <br />
        <h5>Products</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anti-virus Software</td>
              <td>Anti-virus software subscription</td>
              <td>$200</td>
              <td>1</td>
              <td>$200</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h5>Services</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anti-virus Software</td>
              <td>Anti-virus software subscription</td>
              <td>$200</td>
              <td>1</td>
              <td>$200</td>
            </tr>
          </tbody>
        </table>
        <div>
          <strong>Total: </strong>
          $1,000,000
        </div>
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
