import React from 'react';
import ReactDOM from 'react-dom';
import BvApp from './BvApp';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(<BvApp />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./BvApp.js', () => {
    const NextApp = require('./BvApp').default;
    ReactDOM.render(<BvApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
