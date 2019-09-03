import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const store = createStore(
    reducers, 
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState({
        bag: store.getState().bag,
        bagOpen: store.getState().bagOpen
    });
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);