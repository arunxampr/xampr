import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

export default class BottomSheetGrid extends Component {
  render() {
    return(
      <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <View style={{ flex: 1, backgroundColor:'rgba(0,0,0,.2)' }} />
        <Text style={{ alignItems: 'center', height: 56 }} >Create</Text>
      </View>
    );
  }
}
