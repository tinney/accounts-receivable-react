import {
  ADD_INVOICE,
  SHOW_INVOICE,
} from '../constants/types';

export const addInvoice = function(invoice) {
  return { type: ADD_INVOICE, payload: invoice };
}

export const showInvoice = function(invoiceId) {
  return { type: SHOW_INVOICE, payload: invoiceId };
}