import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.scss';
import { ThemeProvider } from './contexts/Theme/Theme.context';

ReactDOM.render(     
    <ThemeProvider>
        <App />
    </ThemeProvider>, document.getElementById('root')
);