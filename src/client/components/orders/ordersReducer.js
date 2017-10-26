import { INCREASE_COUNT } from './ordersActionTypes'

const initialState = {
  ordersCount: 0
}

function ordersReducer (state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        ordersCount: action.count
      }
  }
}

export default ordersReducer
