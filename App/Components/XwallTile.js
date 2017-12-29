import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles/XwallTileStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getActivityIcon } from '../Utilities/Constants';
import { formatDateTime } from '../Utilities/FormatDateTime';
import { getXwallTileStatus } from '../Utilities/XwallTileStatus';

export default class XwallTile extends Component {
  static propTypes = {
      onPress: PropTypes.func,
      activity: PropTypes.object,
      navigator: PropTypes.object
    }

  // show bottomsheet
  options = () => {
    this.props.options(this.props.activity);
  }

  // dp modal show function
  onPressThumbnail = () => {
    alert("Thumbnail Modal -> ActivityGuid: " + this.props.activity.ActivityGuid);
  }

  // navigate to view
  onPressItem = () => {
    alert("View -> ActivityGuid: " + this.props.activity.ActivityGuid);
  }

  render () {

    // tile icon
    const thumbnail = getActivityIcon(this.props.activity.ActivityType);
    const thumbnailBackgroundColor = this.props.activity.ActivityThemeCode;

    // name and last message
    let name = this.props.activity.ActivityName;
    let lastMessage = this.props.activity.LastMessage;

    // status is displayed below last message
    let status = getXwallTileStatus(this.props.activity.ActivityType);
    if (status) {
      var statusBackgroundColor = status.backgroundColor;
      var statusIcon = status.icon;
      var statusText = status.text;
    }

    // date & time
    let time = formatDateTime(this.props.activity.ETA);

    return (
      <View
        style={styles.container} >

        {/* thumbnail */}
        <View style={styles.thumbnailContainer} >
          <TouchableOpacity onPress={this.onPressThumbnail} style={[styles.thumbnailBackground, {backgroundColor: thumbnailBackgroundColor}]} >
            <MaterialCommunityIcons name={thumbnail} style={styles.thumbnail} />
          </TouchableOpacity>
        </View>

        {/* content */}
        <TouchableOpacity
          onPress={this.onPressItem}
          style={styles.content} >
          <View>
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
          { // render only if status exist
            status &&
            <View
              style={[styles.status, {backgroundColor: statusBackgroundColor}]} >
              <MaterialCommunityIcons name={statusIcon} style={styles.statusIcon} />
              <Text
                style={styles.statusText} >
                {statusText}
              </Text>
            </View>
          }
          </View>
        </TouchableOpacity>

      </View>
      )
  }
}
