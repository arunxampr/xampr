import ApplicationStyles from '../Themes/ApplicationStyles';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, TouchableWithoutFeedback, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }

  render () {
    return (
      <View style={ApplicationStyles.container}>
        <Text > Dashboard will come here...</Text>

        <Button
          onPress={()=>{this.setState({visible: true})}}
          title="Open Modal" />

        <Modal
          animationType='fade'
          visible={this.state.visible}
          onRequestClose={()=>{this.setState({visible: false})}}
          transparent={true} >
          <TouchableWithoutFeedback
            onPress={()=>this.setState({visible: false})}>
          <View style={{alignItems: 'center', backgroundColor: '#0004', justifyContent: 'center', flex: 1}}>
            <TouchableWithoutFeedback>
              <View style={{backgroundColor: '#fff', borderRadius: 4, width: 200}} >
                <View style={{padding: 6}}>
                  <Text style={{fontSize: 14, paddingLeft: 10}}>Title</Text>
                </View>
                <View style={{alignItems: 'center', backgroundColor: '#ace8', justifyContent: 'center', height: 150, }}>
                  <MaterialCommunityIcons name='clipboard-text'
                    style={{color: '#fffa', fontSize: 72}} />
                </View>
                <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-around'}}>
                  <MaterialCommunityIcons name='message-text' style={{fontSize: 14, color: '#00ba'}} />
                  <MaterialCommunityIcons name='book' style={{fontSize: 14, color: '#00ba'}} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
        </Modal>

      </View>
    )
  }
}
