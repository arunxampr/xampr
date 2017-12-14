import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './Styles/XwallTileStyles'
import { Ionicons } from '@expo/vector-icons';
import { getActivityImageSource } from '../Utilities/Constants';
import { formatDateTime } from '../Utilities/FormatDateTime';

export default class XwallTile extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        activity: PropTypes.object,
        navigator: PropTypes.object
      }

  render () {

    let thumbnail = getActivityImageSource(this.props.activity.ActivityType);
    let name = this.props.activity.ActivityName;
    let lastMessage = this.props.activity.LastMessage;
    let time = formatDateTime(this.props.activity.ETA);

    return (
      <View
        style={styles.container} >

        {/* left side */}
        <View style={styles.left} >
          <Image
            source={ thumbnail }
            style={styles.thumbnail} />
        </View>

        {/* center content */}
        <View style={[styles.center, styles.border]} >
          <Text
            style={styles.title}>
            { name }
          </Text>
          <Text
            style={styles.description}>
             { lastMessage }
          </Text>
          <View
            style={styles.status} >
            <Ionicons name="md-checkmark-circle" style={styles.statusIcon} />
            <Text
              style={styles.statusText} >
              0/1
            </Text>
          </View>
        </View>

        {/* right side  */}
        <View style={[styles.right, styles.border]} >
          <Text
            style={styles.time} >
            { time }
          </Text>
          <View
            style={styles.rightBottom} >
            <Ionicons name="md-volume-mute" style={styles.actionItem} />
            <Ionicons name="ios-more" style={styles.actionItem} />
          </View>
        </View>

      </View>
      )
  }
}
