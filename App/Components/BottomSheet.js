import React, { Component } from 'react';
import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import BottomSheetListItem from './BottomSheetListItem';
import XwallTileMore from './XwallTileMore';

export default class BottomSheet extends Component {

  state = {
    activity: this.props.activity,
    bottomSheetIn: new Animated.Value(0),
    fadeAnim: new Animated.Value(0),
  }

  componentWillMount() {
    Animated.timing(this.state.fadeAnim,{
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.bottomSheetIn,{
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  close = () => {
    Animated.timing(this.state.fadeAnim,{
      toValue: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.bottomSheetIn,{
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.props.close();
    }, 100);
  }

  _keyExtractor = (item, index) => item.icon

  options = () => ([
    { icon: "package-down", name: "Archive" },
    { icon: "delete", name: "Delete" },
    { icon: "volume-off", name: "Mute" },
    // { icon: "pin", name: "Pin" },
    { icon: "open-in-new", name: "View" },
    { icon: "message-text", name: "Goto Chat" },
    { icon: "information", name: "More Details" },
  ]);

  _renderItem = ({item}) => (
    <BottomSheetListItem
      icon={item.icon}
      name={item.name}
      activity={this.state.activity}
    />
  );

  render() {
    const listItems = this.options();
    const listItemsLength = listItems.length;
    return (
      <Animated.View
        style={{
          backgroundColor:'rgba(0,0,0,.4)', flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          opacity: this.state.fadeAnim,
        }}>
        <TouchableOpacity
          onPress={this.close}
          style={{ flex: 1 }} />
        <Animated.View
          style={{
            height: 48 * listItemsLength + 60,
            transform: [
              {
                translateY: this.state.bottomSheetIn.interpolate({
                  inputRange: [0, 1],
                  outputRange: [500, 1],
                })
              }
            ]
          }}>
          { this.props.alignItems === 'list' &&
            <View>
              <XwallTileMore activity={this.props.activity} />
              <FlatList
                data={this.options()}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />
            </View>
          }
        </Animated.View>
      </Animated.View>
    );
  }

}
