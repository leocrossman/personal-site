import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, getInitialTheme } from './Theme/ThemeContext';
import Background from './Theme/Background/Background';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider initialTheme={getInitialTheme()}>
        <Background>
          <App />
        </Background>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
