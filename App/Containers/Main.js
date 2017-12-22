import React, { PureComponent } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Dashboard from '../Components/Dashboard';
import Xwall from '../Components/Xwall';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class MainScreen extends PureComponent {
  state = {
    index: 1,
    routes: [
      { key: 'first', title: 'Dashboard' },
      { key: 'second', title: 'X-Wall' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: Dashboard,
    second: Xwall,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
