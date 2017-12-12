import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/index';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.ember
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:  Metrics.baseMargin, 
    margin: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    borderBottomColor: Colors.background,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.eggplant,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.eggplant,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
