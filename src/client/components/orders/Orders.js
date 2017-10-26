import React, { Component } from 'react'

import { View, Text, Button } from 'react-native'

import Users from './Users'

class Orders extends Component {
  constructor (props) {
    super(props)

    this.switchFlag = false

    this.changeCount = this.changeCount.bind(this)
  }

  changeCount () {
    console.log('changing count')
    if (!this.switchFlag) {
      this.props.increaseCount(
        this.props.ordersState.ordersCount
      )
      this.switchFlag = true
    } else {
      this.props.decreaseCount(
        this.props.ordersState.ordersCount
      )
      this.switchFlag = false
    }
  }

  render () {
    return (
      <View>
        <Text>Orders: {this.props.ordersState.ordersCount}</Text>
        <Button title='Inc' onPress={this.changeCount} />
        <Users
          users={this.props.ordersState.users}
          loading={this.props.ordersState.loading}
          current={this.props.ordersState.current}
          fetchUserAction={this.props.fetchUserAction}
        />
      </View>
    )
  }
}

export default Orders
