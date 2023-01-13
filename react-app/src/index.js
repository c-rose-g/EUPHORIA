import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { IconContext } from 'react-icons';
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ModalProvider>
    <IconContext.Provider value={{color:'black', className:'react-icons'}}>
        <App />
    </IconContext.Provider>
    </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
