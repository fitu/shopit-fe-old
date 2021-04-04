import { Provider as AlertProvider, positions, transitions } from 'react-alert';

import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER,
    transtion: transitions.SCALE,
};

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,
    document.getElementById('root')
);
