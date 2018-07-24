import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

WebFont.load({
  google: {
    families: ['Orbitron'],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
