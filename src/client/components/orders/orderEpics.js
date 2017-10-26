import { Observable } from 'rxjs'
// import individual rxjs operators
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/ignoreElements'
import 'rxjs/add/operator/switchMap'

import { fetchUserFulfilledAction } from './ordersActions'

import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  FETCH_USER
} from './ordersActionTypes'

export function increaseCount (action$) {
  return action$
    .ofType(INCREASE_COUNT)
    .do(action => console.log(action))
    .ignoreElements()
}

export function decreaseCount (action$) {
  return action$
    .ofType(DECREASE_COUNT)
    .do(action => console.log(action))
    .ignoreElements()
}

export function fetchUserEpic (action$) {
  return action$.ofType(FETCH_USER)
    .switchMap(({payload}) => {
      return Observable.ajax.getJSON(`https://api.github.com/users/${payload}`)
        .map(user => {
          return fetchUserFulfilledAction(user)
        })
    })
}
