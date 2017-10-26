import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  FETCH_USER,
  FETCH_USER_FULFILLED
} from './ordersActionTypes'

export function increaseCount (count) {
  console.log('increaseCount action')
  let orderCount = parseInt(count, 10) + 1

  return {
    type: INCREASE_COUNT,
    count: orderCount
  }
}

export function decreaseCount (count) {
  console.log('decreaseCount action')
  let orderCount = parseInt(count, 10) - 1

  return {
    type: DECREASE_COUNT,
    count: orderCount > 0 ? orderCount : 0
  }
}

export function fetchUserAction (login) {
  return {
    type: FETCH_USER,
    payload: login
  }
}

export function fetchUserFulfilledAction (user) {
  return {
    type: FETCH_USER_FULFILLED,
    payload: user
  }
}
