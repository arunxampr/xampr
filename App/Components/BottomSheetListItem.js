import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class BottomSheetListItem extends Component {
  render() {
    return(
      <View style={{alignItems: 'center', backgroundColor: '#fff', flexDirection: 'row', height: 48}} >
        <MaterialCommunityIcons name={this.props.icon}
          style={{color: '#444', fontSize: 24, paddingLeft: 16, paddingRight: 16}} />
        <Text style={{color: '#444', fontSize: 16, paddingLeft: 16, paddingRight: 16}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
