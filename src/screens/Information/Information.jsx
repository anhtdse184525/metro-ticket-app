import { Text, View } from "react-native";
import { Component } from "react";
import SafeScreen from "../../components/templates/SafeScreen/SafeScreen";

export class Information extends Component {
  render() {
    return (
      <SafeScreen>
        <View>
          <Text>Information</Text>
        </View>
      </SafeScreen>
    );
  }
}

export default Information;
