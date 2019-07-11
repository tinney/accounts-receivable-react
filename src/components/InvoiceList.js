import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    invoices: state.invoices
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

function InvoiceList(props) {
  return (
    <ul className="InvoiceList">
      {props.invoices.map(i => {
        return (
          <li>
            <Link to={`/invoices/${i.id}`}>{i.client}</Link>
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
