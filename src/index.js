import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import GlobalStyles from '../src/styles/GlobalStyles'
import Typography from '../src/styles/Typography'
ReactDOM.render(
<>
    <GlobalStyles/>
    <Typography/>
    <App/>
    </>,
    document.getElementById('root')
)