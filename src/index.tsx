import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home } from "./screens/Home";
import {ThemeProvider} from "styled-components";
import {theme} from './theme/index'
import './theme/font.css'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

if(process.env.NODE_ENV === "development") {
    reportWebVitals();
}
