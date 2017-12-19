import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import BottomSheetListItem from './BottomSheetListItem';

export default class BottomSheet extends Component {

  render() {
    return (
      <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <View style={{ flex: 1, backgroundColor:'rgba(0,0,0,.2)' }} />
        <FlatList
          data={[
            { icon: "open-in-new", name: "View" },
            { icon: "pin", name: "Pin" },
            { icon: "package-down", name: "Archive" },
            { icon: "delete", name: "Delete" },
            { icon: "volume-off", name: "Mute" }
            ]}
          renderItem={({item}) => <BottomSheetListItem icon={item.icon} name={item.name} />}
          style={{backgroundColor: '#fff', paddingTop: 8, paddingBottom: 8}} />
      </View>
    );
  }
}
