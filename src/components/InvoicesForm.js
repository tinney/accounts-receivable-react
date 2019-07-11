import React, { useState, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addInvoice } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    addInvoice: invoice => {
      dispatch(addInvoice(invoice));
    }
  };
}

function InvoicesForm({ addInvoice }) {
  let [client, setClient] = useState("");
  let [poNumber, setPoNumber] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();
    addInvoice({ client, poNumber });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        Client:
        <input
          type="text"
          name="client"
          value={client}
          onChange={e => setClient(e.target.value)}
        />
      </label>
      <label>
        Purchase Order Number:
        <input
          type="text"
          name="ponumber"
          value={poNumber}
          onChange={e => setPoNumber(e.target.value)}
        />
      </label>
      <button>Save</button>
    </form>
  );
}

InvoicesForm.propTypes = {
  addInvoice: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(InvoicesForm);
