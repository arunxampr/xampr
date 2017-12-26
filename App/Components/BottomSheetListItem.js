import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class BottomSheetListItem extends Component {

  _onPress = () => {
    alert("Create navigation to pass \" " + this.props.activity.ActivityName + " \" activity");
  }

  render() {
    return(
      <TouchableHighlight
        onPress={this._onPress}>
        <View
        style={{alignItems: 'center', backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee', flexDirection: 'row', height: 48}} >
          <MaterialCommunityIcons name={this.props.icon}
            style={{color: '#444', fontSize: 24, paddingLeft: 16, paddingRight: 16}} />
          <Text style={{color: '#444', fontSize: 16, paddingLeft: 16, paddingRight: 16}}>
            {this.props.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
