import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
// import { offline } from 'redux-offline'
// import offlineConfig from 'redux-offline/lib/defaults'

import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import { PersistGate } from 'redux-persist/es/integration/react'

import rootEpic from './client/epics'
import rootReducer from './client/reducers'

import './index.css'

import Routes from './client/routes/web'

import registerServiceWorker from './registerServiceWorker'

const epicMiddleware = createEpicMiddleware(rootEpic)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(epicMiddleware)
//   )
// )

// const store = offline(offlineConfig)(createStore)(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

const config = {
  key: 'root',
  storage
}

const reducer = persistCombineReducers(config, rootReducer)

const configureStore = () => {
  let store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )
  let persistor = persistStore(store)

  return { persistor, store }
}

const { persistor, store } = configureStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

const Loading = () => <div>Booting...</div>

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      onBeforeLift={onBeforeLift}
      persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Routes />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// )

registerServiceWorker()
