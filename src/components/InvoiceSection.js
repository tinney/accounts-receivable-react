import React from "react";

function InvoiceSection(props) {
  const { items, title } = props;
  if (items) {
    return (
      <>
        <h5>{title}</h5>
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
            {items.map(item => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>${item.price_cents / 100}</td>
                <td>{item.quantity}</td>
                <td>${(item.price_cents * item.quantity) / 100}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    return <p>This section is empty!</p>;
  }
}

export default InvoiceSection;
