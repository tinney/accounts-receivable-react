import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import { addInvoice } from './actions/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

store.dispatch(addInvoice({
  id: "1",
  client: 'CircleCi',
  attn: 'Bo <bo@circleci.com>',
  due_date: '10/10/2020',
  notes: 'Send monthly invoices.',
  amount: 100000,
  projects: [
    { name: 'Anti-virus Software', description: 'Subscription service for virus software.', price_cents: 20000, quantity: 1},
    { name: 'AWS', description: 'Monthly server costs.', price_cents: 380000, quantity: 1},
  ],
  services: [
    { name: 'Software Development', description: 'Refactor of addresses module.', price_cents: 15000, quantity: 8},
    { name: 'Software Development', description: 'Exract micro-service.', price_cents: 15000, quantity: 12},
    { name: 'Software Development', description: 'Deploy new staging environment.', price_cents: 15000, quantity: 9},
  ],
}));

store.dispatch(addInvoice({
  id: "2",
  client: 'New Relic',
  attn: 'Matan <Matan@new-relic.com>',
  due_date: '10/20/2020',
  notes: 'Send weekly invoices.',
  amount: 100000,
  projects: [
    { name: 'Video Software', description: 'Subscription service for video software.', price_cents: 14000, quantity: 1},
    { name: 'Heroku', description: 'Monthly server costs.', price_cents: 28000, quantity: 1},
  ],
  services: [
    { name: 'Software Development', description: 'Refactor of node modules.', price_cents: 15000, quantity: 8},
    { name: 'Software Development', description: 'Exract service layer.', price_cents: 15000, quantity: 12},
    { name: 'Software Development', description: 'Deploy product environments.', price_cents: 15000, quantity: 9},
  ],
}));