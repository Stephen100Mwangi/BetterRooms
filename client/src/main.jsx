/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)
