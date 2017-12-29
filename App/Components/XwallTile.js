import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Modal, Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native'
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

  constructor() {
    super();
    this.state = {
      thumbnailModalVisible: false,
    }
  }

  // show bottomsheet
  options = () => {
    this.props.options(this.props.activity);
  }

  // dp modal show function
  onPressThumbnail = () => {
    // alert("Thumbnail Modal -> ActivityGuid: " + this.props.activity.ActivityGuid);
    this.setState({thumbnailModalVisible: true});
  }

  // navigate to view
  onPressItem = () => {
    alert("View -> ActivityGuid: " + this.props.activity.ActivityGuid);
  }

  render () {

    // tile icon
    let thumbnail = getActivityIcon(this.props.activity.ActivityType);
    thumbnail = thumbnail ? thumbnail : 'blur';

    // activity color
    let activityColor = this.props.activity.ActivityThemeCode;
    activityColor = activityColor ? activityColor : '#eee';

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
          <TouchableOpacity onPress={this.onPressThumbnail} style={[styles.thumbnailBackground, {backgroundColor: activityColor}]} >
            <MaterialCommunityIcons name={thumbnail} style={styles.thumbnail} />
          </TouchableOpacity>
        </View>

        <Modal
          
          visible={this.state.thumbnailModalVisible}
          onRequestClose={()=>{this.setState({thumbnailModalVisible: false})}}
          transparent={true} >
          <TouchableWithoutFeedback
            onPress={()=>this.setState({thumbnailModalVisible: false})}>
          <View style={{alignItems: 'center', backgroundColor: '#0008', justifyContent: 'center', flex: 1}}>
            <TouchableWithoutFeedback>
              <View style={{backgroundColor: activityColor, elevation:10, width: 250}} >
                <View style={{backgroundColor: '#0001', padding: 6}}>
                  <Text style={{color: '#fff', fontSize: 18, paddingLeft: 10}}>{name}</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', height: 200, }}>
                  <MaterialCommunityIcons name={thumbnail}
                    style={{color: '#fffa', fontSize: 72}} />
                </View>
                <View style={{backgroundColor: '#fff', flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
                  <MaterialCommunityIcons name='message-text' style={{fontSize: 24, color: activityColor}} />
                  <MaterialCommunityIcons name='information-outline' style={{fontSize: 24, color: activityColor}} />
                  <MaterialCommunityIcons name='open-in-new' style={{fontSize: 24, color: activityColor}} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          </TouchableWithoutFeedback>
        </Modal>

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
