import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

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
    <ul className="InvoiceList nav nav-pills flex-column">
      {props.invoices.map(i => {
        return (
          <li class="nav-item">
            <NavLink to={`/invoices/${i.id}`} className="nav-link">{i.client}</NavLink>
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
