import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
	this.state = {
		compatible: false,
		authenticated: false,
		content: "testing"
	};
  }

  componentDidMount() {
    this.checkDeviceForHardware();
  }

  checkDeviceForHardware = async () => {
    let compatible = await Expo.LocalAuthentication.hasHardwareAsync();
    this.setState({ compatible });
  };

 
  static navigationOptions = {
    header: null,
  };

  async checkDeviceForHardware (){
	let compatible = await Expo.Fingerprint.hasHardwareAsync();
    this.setState({ compatible });
  }
  
  async authenticate(){
	  Expo.LocalAuthentication.authenticateAsync();
  }
  
  render() {
    return (
      <View>
        <ScrollView style={{paddingTop: 30}}>
          <View >
            <Text>Get started by opening</Text>
			<Button title="Do Something" onPress={this.authenticate.bind(this)}/>
			<Text>{this.state.authenticated}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

