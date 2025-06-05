import { Text, View } from "react-native";
import React, { Component } from "react";
import SafeScreen from "../../components/templates/SafeScreen/SafeScreen";

export class Metro extends Component {
  render() {
    return (
      <SafeScreen>
        <View>
          <Text>Metro</Text>
        </View>
      </SafeScreen>
    );
  }
}

export default Metro;
