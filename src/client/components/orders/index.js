import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  increaseCount,
  decreaseCount,
  fetchUserAction
} from './ordersActions'

import { View } from 'react-native'

import Orders from './Orders'

const OrdersWrapper = props => (
  <View>
    <Orders
      increaseCount={props.actions.increaseCount}
      decreaseCount={props.actions.decreaseCount}
      ordersState={props.ordersState}
      fetchUserAction={props.actions.fetchUserAction}
    />
  </View>
)

function mapStateToProps (state) {
  return {
    ordersState: state.ordersState
  }
}

function matchDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      increaseCount: increaseCount,
      decreaseCount: decreaseCount,
      fetchUserAction: fetchUserAction
    }, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(OrdersWrapper)
