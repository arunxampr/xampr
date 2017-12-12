import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  
  componentDidMount () {
    const { navigate } = this.props.navigation;
    navigate('HomeScreen', {  })
  }
   render () {
    if(true){
      
    return (
          <View >
            <Text >
             Starting...
            </Text>
          </View>
    )
  }
  else{
    //return (<SignUpScreen/>)
    return('');
  }
  }
}
