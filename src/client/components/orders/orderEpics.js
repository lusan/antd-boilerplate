// import { Observable } from 'rxjs'
// import individual rxjs operators
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/ignoreElements'
import 'rxjs/add/operator/filter'

import { INCREASE_COUNT, DECREASE_COUNT } from './ordersActionTypes'

export function increaseCount (action$) {
  return action$
    .filter(action => action.type === INCREASE_COUNT)
    .do(action => console.log(action))
    .ignoreElements()
}

export function decreaseCount (action$) {
  return action$
    .filter(action => action.type === DECREASE_COUNT)
    .do(action => console.log(action))
    .ignoreElements()
}
