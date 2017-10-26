import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  FETCH_USER,
  FETCH_USER_FULFILLED
} from './ordersActionTypes'

const initialState = {
  ordersCount: 3,
  users: [
    'lusan',
    'jyoti',
    'sachin',
    'lakshita',
    'ayushi'
  ],
  current: null,
  loading: false
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

    case FETCH_USER:
      return {
        ...state,
        current: null,
        loading: true
      }

    case FETCH_USER_FULFILLED:
      return {
        ...state,
        current: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default ordersReducer
