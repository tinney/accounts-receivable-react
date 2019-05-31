import {
  ADD_INVOICE,
  SHOW_INVOICE,
} from './constants/types';

const initialState = { invoices: [], activeInvoiceId: -1 }

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_INVOICE:
      return {...state, invoices: [...state.invoices, action.payload]}

    case SHOW_INVOICE:
      return {...state, activeInvoiceId: action.payload };

    default:
      return state;
  }
}

