import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>Invoice Time</h1>
      <Link to="/invoices/add">Add Invoice</Link>
    </header>
  );
}

export default Header;
