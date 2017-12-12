import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './Styles/XwallTileStyles'
import { Ionicons } from '@expo/vector-icons';

export default class XwallTile extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        activity: PropTypes.object,
        navigator: PropTypes.object
      }
    
  render () {
    return (
        <View style={styles.container} >

        {/* left side */}
        <View style={styles.left} >
          <Image
            source={require('../Images/activity_icons/EventPlannerActivity.png')}
            style={styles.thumbnail} />
        </View>

        {/* center content */}
        <View style={styles.center} >
          <Text>   {this.props.activity.ActivityName}          </Text>
          <Text  style={styles.description}>
             {this.props.activity.ActivityDescription} 
          </Text>
          <View            style={styles.status} >
            <Ionicons name="md-checkmark-circle" style={styles.statusIcon} />
            <Text              style={styles.statusText} >
              0/2
            </Text>
          </View>
        </View>

        {/* right side  */}
        <View style={styles.right} >
          <Text
            style={styles.time} >
            4:00 PM
          </Text>
          <View
            style={styles.rightBottom} >
            <Ionicons name="md-volume-mute" style={styles.mute} />
            <Ionicons name="ios-more" style={styles.more} />
          </View>
        </View>



      </View>
      )
  }
}
