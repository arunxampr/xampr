import colors from '../../Themes/Colors';
import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/index';

var { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  ...ApplicationStyles.screen,

 actionItem: {
    color: '#777',
    fontSize: 20,
    marginLeft: 10,
  },
  border: {
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  center: {
    flex: 4,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop:10,
  },
  description: {
    color: '#666',
    fontSize: 13,
    paddingTop: 2,
  },
  left: {
    flex: 1,
    paddingLeft: 12,
  },
  right: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 5,
  },
  rightBottom: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  status: {
    alignSelf: 'flex-start',
    backgroundColor: '#5a5',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    padding: 2,
    marginTop: 4,
  },
  statusIcon: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    marginRight: 4,
  },
  time: {
    fontSize: 11,
    color: '#666',
  },
  title: {
    color: '#222',
    fontSize: 15,
    fontWeight: "400",
    marginTop: -4,
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 4,
  }

})
