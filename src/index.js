import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from './client/epics'
import rootReducer from './client/reducers'

import './index.css'

import Routes from './client/routes/web'

import registerServiceWorker from './registerServiceWorker'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
