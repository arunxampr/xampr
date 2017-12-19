import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class BottomSheetListItem extends Component {
  render() {
    return(
      <View style={{alignItems: 'center', flexDirection: 'row', height: 48}} >
        <MaterialCommunityIcons name={this.props.icon}
          style={{fontSize: 24, paddingLeft: 16, paddingRight: 16}} />
        <Text style={{fontSize: 16, paddingLeft: 16, paddingRight: 16}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
