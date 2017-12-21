import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'

export default class Dashboard extends Component {
  render () {
    return (
      <View style={ApplicationStyles.container}>
        <Text > Dashboard will come here...</Text>
      </View>
    )
  }
}
