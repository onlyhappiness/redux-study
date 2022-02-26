import { createStore } from 'redux';
import reducers from './reducers/index';

// connect react with redux
// react-redux
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
