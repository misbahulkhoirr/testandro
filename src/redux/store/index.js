import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
