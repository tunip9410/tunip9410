import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux"
import { Provider } from "react-redux"

function reducer(currentState :any, action :any) {
    if (currentState === undefined) {
        return {
            page: "home"
        }
    }

    const newState = {...currentState}

    return newState
}

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
