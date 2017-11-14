import React from 'react'
import ReactDOM from 'react-dom'
import './brand.css'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = applyMiddleware(thunk)
let store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
