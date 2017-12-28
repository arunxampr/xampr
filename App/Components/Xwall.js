import XwallTile from './XwallTile';
import BottomSheet from './BottomSheet';
import Activities from '../Services/Activities';
import Api from '../Services/Api';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApplicationStyles } from '../Themes/index';

import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/XwallStyles'


export default class Xwall extends Component {
    constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = []

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
     this.ds = new ListView.DataSource({rowHasChanged})

     this.activitiesService = Activities.create();
    // Datasource is always in state
    this.state = {
      dataSource: this.ds.cloneWithRows(dataObjects),
      activity: {},
      bottomSheet: false
    }
    this.getData();
  }

  getData = async() => {
    this.activitiesService.getXwallData((data)=>{
      this.setState({dataSource : this.ds.cloneWithRows(data.Response.UserXWallActivities)});
    },(error)=>{
     console.log('error');
    });
  }



  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow = (rowData) => (
    <XwallTile activity={rowData} options={this.bottomSheet} />
  )

  bottomSheet = (activity) => {
    this.setState({
      activity: activity,
      bottomSheet: true
    });
  }

  bottomSheetClose = () => {
    this.setState({
      bottomSheet: false
    })
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRows(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  _renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render () {
    return (
    <View style={ApplicationStyles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
      {
        this.state.bottomSheet &&
        <BottomSheet
          alignItems='list'
          activity={this.state.activity}
          close={this.bottomSheetClose}
        />
      }
    </View>
    );
  }
}
