import { combineEpics } from 'redux-observable'

import { increaseCount, decreaseCount } from '../components/orders/orderEpics'

const rootEpic = combineEpics(
  increaseCount,
  decreaseCount
)

export default rootEpic
