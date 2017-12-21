import colors from '../../Themes/Colors';
import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/index';

var { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  ...ApplicationStyles.screen,

  content: {
    flex: 4,
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingRight: 8,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop:10,
  },
  description: {
    color: '#666',
    fontSize: 13,
    flex: 1,
  },
  descriptionRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  left: {
    flex: 1,
    paddingLeft: 12,
  },
  more: {
    color: '#777',
    fontSize: 24,
    marginTop: -5,
    paddingLeft: 5,
  },
  moreRow: {
    flexDirection: 'row',
  },
  mute: {
    color: '#777',
    fontSize: 15,
    paddingLeft: 4,
  },
  status: {
    alignSelf: 'flex-start',
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
    alignItems: 'flex-end',
    fontSize: 11,
    color: '#666',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 2,
  },
  title: {
    color: '#222',
    fontSize: 15,
    fontWeight: '500'
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 4,
  }

})
