import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Example1 } from 'components/Example1';
import { Reader } from 'components/Reader/Reader';
import './index.css';
import publications from './publications.json';

const theme = {};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Example1 /> */}
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
