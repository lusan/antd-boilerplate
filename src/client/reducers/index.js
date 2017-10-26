import { combineReducers } from 'redux'

import ordersReducer from '../components/orders/ordersReducer'

const itemsState = {
  items: [
    {
      id: 1,
      name: 'item 1'
    }
  ]
}

const rootReducer = combineReducers({
  ordersState: ordersReducer,
  itemsState: itemsState.items
})

export default rootReducer
