import React from 'react';
import ReactDOM from 'react-dom';

import Main from './pages/index';

const Root = () => (
  <Main />
);

ReactDOM.render(<Root />, document.getElementById('app'));

module.hot.accept();
