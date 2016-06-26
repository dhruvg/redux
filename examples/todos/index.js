import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

export default function configureStore(initialState) {
  const store = createStore(todoApp, initialState,
    window.devToolsExtension && window.devToolsExtension()
  );
  return store;
}

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
