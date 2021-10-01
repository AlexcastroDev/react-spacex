import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from './theme/index'
import './theme/styles.css'
import './theme/font.css'
import { App } from './screens/App/App';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

if (process.env.NODE_ENV === "development") {
    reportWebVitals();
}
