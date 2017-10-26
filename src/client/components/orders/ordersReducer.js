import { INCREASE_COUNT, DECREASE_COUNT } from './ordersActionTypes'

const initialState = {
  ordersCount: 3
}

function ordersReducer (state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        ordersCount: action.count
      }

    case DECREASE_COUNT:
      return {
        ...state,
        ordersCount: action.count
      }

    default:
      return state
  }
}

export default ordersReducer
