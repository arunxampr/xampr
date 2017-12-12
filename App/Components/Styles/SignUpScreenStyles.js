
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    container: {
      flex: 1,
      marginTop:100
          },
    input: {
            height: 45,
            borderRadius: 5,
            marginHorizontal: Metrics.section,
            marginVertical: Metrics.baseMargin,
            justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1       
      }
})
