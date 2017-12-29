import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import styles from './Styles/XwallTileStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getActivityIcon } from '../Utilities/Constants';
import { formatDateTime } from '../Utilities/FormatDateTime';

export default class XwallTileMore extends Component {
  static propTypes = {
      onPress: PropTypes.func,
      activity: PropTypes.object,
      navigator: PropTypes.object
    }

  render () {

    // tile icon
    const thumbnail = getActivityIcon(this.props.activity.ActivityType);
    const thumbnailBackgroundColor = this.props.activity.ActivityThemeCode;

    // name and last message
    let name = this.props.activity.ActivityName;
    let lastMessage = this.props.activity.LastMessage;

    // date & time
    let time = formatDateTime(this.props.activity.ETA);

    return (
      <View
        style={[styles.container, {borderBottomWidth: 1, backgroundColor: this.props.activity.ActivityThemeCode, borderColor: this.props.activity.ActivityThemeCode}]} >

        {/* thumbnail */}
        <View style={styles.thumbnailContainer} >
          <View style={[styles.thumbnailBackground, {backgroundColor: thumbnailBackgroundColor}]} >
            <MaterialCommunityIcons name={thumbnail} style={styles.thumbnail} />
          </View>
        </View>

        {/* content */}
        <View style={[styles.content, {borderBottomWidth: 0}]} >
          <View
            style={styles.timeRow}>
            <Text
              style={[styles.title, {color: '#fff'}]}
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
              style={[styles.description, {color: '#fff'}]}
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
