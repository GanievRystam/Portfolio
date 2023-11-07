import React from 'react';
import render from 'react-dom';
import App from './app/App';
import 'shared/config/i18n/i18n';
render.render(
            <App/>,
    document.getElementById('root')
);
