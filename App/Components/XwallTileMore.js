import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './Styles/XwallTileStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getActivityAssets } from '../Utilities/Constants';
import { formatDateTime } from '../Utilities/FormatDateTime';
import { getXwallTileStatus } from '../Utilities/XwallTileStatus';

export default class XwallTileMore extends Component {
  static propTypes = {
      onPress: PropTypes.func,
      activity: PropTypes.object,
      navigator: PropTypes.object
    }

  render () {

    // activity assets
    const activity = getActivityAssets(this.props.activity.ActivityType);

    // tile icon
    const thumbnail = activity ? activity.icon : '';
    const thumbnailBackgroundColor = activity ?  activity.iconBackgroundColor : '';

    // name and last message
    let name = this.props.activity.ActivityName;
    let lastMessage = this.props.activity.LastMessage;

    // date & time
    let time = formatDateTime(this.props.activity.ETA);

    return (
      <View
        style={styles.container} >

        {/* thumbnail */}
        <View style={styles.thumbnailContainer} >
          <TouchableOpacity onPress={this._onPress} style={[styles.thumbnailBackground, {backgroundColor: thumbnailBackgroundColor}]} >
            <MaterialCommunityIcons name={thumbnail} style={styles.thumbnail} />
          </TouchableOpacity>
        </View>

        {/* content */}
        <View style={styles.content} >
          <View
            style={styles.timeRow}>
            <Text
              style={styles.title}
              ellipsizeMode={'tail'}
              numberOfLines={1}>
              {name}
            </Text>
            <Text
              style={styles.time} >
              {time}
            </Text>
          </View>
          <View
            style={styles.descriptionRow} >
            <Text
              style={styles.description}
              ellipsizeMode={'tail'}
              numberOfLines={1}>
               {lastMessage}
            </Text>
          </View>
        </View>

      </View>
      )
  }
}
