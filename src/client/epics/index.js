import { combineEpics } from 'redux-observable'

import { increaseCount } from '../components/orders/orderEpics'

const rootEpic = combineEpics(increaseCount)

export default rootEpic
