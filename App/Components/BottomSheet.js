import React, { Component } from 'react';
import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import BottomSheetListItem from './BottomSheetListItem';

export default class BottomSheet extends Component {

  state = {
    animateView: new Animated.Value(0),
  }

  componentWillMount() {
    Animated.timing(this.state.animateView,{
      toValue: 1,
      duration: 300,
    }).start()
  }

  close = () => {
    this.props.close();
  }

  _keyExtractor = (item, index) => item.icon

  options = () => ([
    { icon: "open-in-new", name: "View" },
    { icon: "pin", name: "Pin" },
    { icon: "package-down", name: "Archive" },
    { icon: "delete", name: "Delete" },
    { icon: "volume-off", name: "Mute" }
  ]);

  _renderItem = ({item}) => (
    <BottomSheetListItem
      icon={item.icon}
      name={item.name}
    />
  );

  render() {
    return (
      <View style={{ backgroundColor:'rgba(0,0,0,.4)', flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <TouchableOpacity
          onPress={this.close}
          style={{ flex: 1 }} />
        <Animated.View
          style={{
            height: 240,
            transform: [
              {
                translateY: this.state.animateView.interpolate({
                  inputRange: [0, 1],
                  outputRange: [700, 1],
                })
              }
            ]
          }}>
          <FlatList
            data={this.options()}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </Animated.View>
      </View>
    );
  }

}
