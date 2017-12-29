import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }

  render () {
    return (
      <View style={ApplicationStyles.container}>
        <Text > Dashboard will come here...</Text>
      </View>
    )
  }
}
