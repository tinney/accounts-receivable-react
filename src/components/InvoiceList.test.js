import React from "react";
import ReactDom from "react-dom";
import { act } from 'react-dom/test-utils';

import InvoiceList from "./InvoiceList";

describe("InvoiceList Component", () => {

    it("Renders a list of provided invoices", () => {
        const div = document.createElement('div');

        const invoices = [
            { id: 1, client: 'Test Double 1' },
            { id: 2, client: 'Test Double 2' },
            { id: 3, client: 'Test Double 3' }
        ];

        act(() => {
            ReactDom.render(<InvoiceList invoices={invoices} />, div)
        });

        const invoiceList = div.querySelector('.InvoiceList');
        expect(invoiceList.children.length).toEqual(invoices.length);
    });

});