import {
  ADD_INVOICE,
} from '../constants/types';

export default function addInvoice(invoice) {
  return { type: ADD_INVOICE, payload: invoice };
}