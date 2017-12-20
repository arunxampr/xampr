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
    let statusText = '2/2';

    // date & time
    let time = formatDateTime(this.props.activity.ETA);

    return (
      <View
        style={styles.container} >

        {/* left side */}
        <View style={styles.left} >
          <Image
            source={thumbnail}
            style={styles.thumbnail} />
        </View>

        {/* center content */}
        <View style={[styles.center, styles.border]} >
          <Text
            style={styles.title}>
            {name}
          </Text>
          <Text
            style={styles.description}>
             {lastMessage}
          </Text>
          <View
            style={[styles.status, {backgroundColor: statusBackgroundColor}]} >
            <MaterialCommunityIcons name={statusIcon} style={styles.statusIcon} />
            <Text
              style={styles.statusText} >
              {statusText}
            </Text>
          </View>
        </View>

        {/* right side  */}
        <View style={[styles.right, styles.border]} >
          <Text
            style={styles.time} >
            {time}
          </Text>
          {/* more */}
          <View
            style={styles.rightBottom} >
            <MaterialCommunityIcons name="volume-off" style={styles.mute} />
            <MaterialCommunityIcons name="dots-horizontal"
              style={styles.more}
              onPress={this.options} />
          </View>
        </View>

      </View>
      )
  }
}
