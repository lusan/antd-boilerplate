import React, { Component } from 'react'

import { TabBar } from 'antd-mobile'

import order from '../../../images/odrMdcn.png'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.navigatePath = this.navigatePath.bind(this)
  }

  navigatePath (path) {
    this.props.history.push(path)
  }

  render () {
    return (
      <TabBar
        unselectedTintColor='#949494'
        tintColor='#33A3F4'
        barTintColor='white'
      >
        <TabBar.Item
          title='Home'
          key='Home'
          icon={order}
          onPress={() => {
            this.navigatePath('/')
          }}
        />

        <TabBar.Item
          title='Orders'
          key='Orders'
          icon={order}
          onPress={() => {
            this.navigatePath('/orders')
          }}
        />

        <TabBar.Item
          title='Articles'
          key='Articles'
          icon={order}
          onPress={() => {
            this.navigatePath('/articles')
          }}
        />

        <TabBar.Item
          title='Profile'
          key='Profile'
          icon={order}
          onPress={() => {
            this.navigatePath('/profile')
          }}
        />
      </TabBar>
    )
  }
}

export default Footer
