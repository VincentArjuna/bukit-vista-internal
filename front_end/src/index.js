import React from 'react';
import ReactDOM from 'react-dom';
import BvApp from './bvApp';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(<BvApp />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./bvApp.js', () => {
    const NextApp = require('./bvApp').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
