import React from 'react';
import {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {connect} from 'react-redux';
import AuthScreen from './component/authenticate';
import HomeScreen from './component/home';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {this.props.auth.isAuth ? <HomeScreen /> : <AuthScreen />}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps)(App);
