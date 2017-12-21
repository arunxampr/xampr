import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './Styles/XwallTileStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getActivityImageSource } from '../Utilities/Constants';
import { formatDateTime } from '../Utilities/FormatDateTime';
import { getXwallTileStatus } from '../Utilities/XwallTileStatus';

export default class XwallTile extends Component {
  static propTypes = {
      onPress: PropTypes.func,
      activity: PropTypes.object,
      navigator: PropTypes.object
    }

  options = () => {
    this.props.options();
  }

  render () {

    // tile icon
    let thumbnail = getActivityImageSource(this.props.activity.ActivityType);

    // name and last message
    let name = this.props.activity.ActivityName;
    let lastMessage = this.props.activity.LastMessage;

    // status is displayed below last message
    let status = getXwallTileStatus(this.props.activity.ActivityType);
    let statusBackgroundColor = status.backgroundColor;
    let statusIcon = status.icon;
    let statusText = status.text;

    // date & time
    let time = formatDateTime(this.props.activity.ETA);

    return (
      <View
        style={styles.container} >

        {/* thumbnail */}
        <View style={styles.left} >
          <Image
            source={thumbnail}
            style={styles.thumbnail} />
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
            {/* more */}
            <View
              style={styles.moreRow} >
              <MaterialCommunityIcons name="pin" style={styles.mute} />
              <MaterialCommunityIcons name="volume-off" style={styles.mute} />
              <MaterialCommunityIcons name="dots-horizontal"
                style={styles.more}
                onPress={this.options} />
            </View>
          </View>
          <View
            style={[styles.status, {backgroundColor: statusBackgroundColor}]} >
            <MaterialCommunityIcons name={statusIcon} style={styles.statusIcon} />
            <Text
              style={styles.statusText} >
              {statusText}
            </Text>
          </View>
        </View>

      </View>
      )
  }
}
