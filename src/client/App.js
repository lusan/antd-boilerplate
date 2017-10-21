// @flow

import React from 'react'

import { View, Text } from 'react-native'

import Main from './components/Main'

import './App.css'

const App = props => (
  <View>
    <Main />
    <Text>{JSON.stringify(props.history)}</Text>
  </View>
)

export default App
