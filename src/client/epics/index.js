import { combineEpics } from 'redux-observable'

import {
  increaseCount,
  decreaseCount,
  fetchUserEpic
} from '../components/orders/orderEpics'

const rootEpic = combineEpics(
  increaseCount,
  decreaseCount,
  fetchUserEpic
)

export default rootEpic
