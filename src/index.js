import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './store/index';

import './index.css';
import App from './App';

// DOM is a Document (web page), a Object (every HTML element) and a model (tree structure to display html)
// all elements in HTML is node.
// ReactDOM creats a root div from HTML DO
const root = ReactDOM.createRoot(document.getElementById('root'));

//  inside of the React DOM, render APP and pass store to the child components
root.render(
    <Provider store = { store }>
        <App />
    </Provider>
);
