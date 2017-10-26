import { Observable } from 'rxjs'
// import individual rxjs operators
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/ignoreElements'


//  import { INCREASE_COUNT, DECREASE_COUNT } from './ordersActionTypes'

export function increaseCount (action$) {
  return action$
    .do(action => console.log(action))
    .ignoreElements()
}
