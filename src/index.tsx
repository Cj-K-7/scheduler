import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { isDarkAtom } from './atoms';
import { darkTheme, lightTheme } from './css/theme';
import App from './App';


const isDark = useRecoilValue(isDarkAtom);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme} >
      <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
