import colors from '../../Themes/Colors';
import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/index';

var { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  
  center: {
    flex: 4,
  },
  container: {
    backgroundColor: colors.transparent,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.drawer,
    borderBottomWidth: 0.5
  },
  description: {
    fontSize: 12,
  },
  left: {
    flex: 1,
  },
  more: {
    fontSize: 20,
    padding: 4,
    margin: 4,
  },
  mute: {
    fontSize: 20,
    padding: 4,
    margin: 4,
  },
  right: {
    flex: 1,
    alignItems: 'center'
  },
  rightBottom: {
    flexDirection: 'row',
  },
  status: {
    alignSelf: 'flex-start',
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    padding: 2,
    marginTop: 2,
  },
  statusIcon: {
    color: '#fff',
    fontSize: 8,
    marginLeft: 4,
    marginRight: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 8,
    marginRight: 4,
  },
  time: {
    fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
})
