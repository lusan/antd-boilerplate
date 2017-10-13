import React, { Component } from 'react';

import { Card, Flex } from 'antd-mobile';
import { Text, Image, StyleSheet } from 'react-native';

import order from '../images/odrMdcn@2x.png';
import reOrder from '../images/rflMdcn@2x.png';

const style = StyleSheet.create({
  image: {
    height: 60,
    resizeMode: 'contain',
    paddingBottom: 100
  }
});

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'redTab',
      hidden: false
    };
  }

  render() {
    return (
      <Flex>
        <Flex.Item align="center">
          <Card>
            <Card.Body>
              <Image source={order} style={style.image} alt="order Medicine" />
              <Text>Order</Text>
            </Card.Body>
          </Card>
        </Flex.Item>
        <Flex.Item align="center">
          <Card>
            <Card.Body>
              <Image
                source={reOrder}
                style={style.image}
                alt="reorder Medicine"
              />
              <Text>Refill</Text>
            </Card.Body>
          </Card>
        </Flex.Item>
      </Flex>
    );
  }
}

export default Main;
