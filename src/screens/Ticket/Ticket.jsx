import { Text, View } from "react-native";
import { Component } from "react";
import SafeScreen from "../../components/templates/SafeScreen/SafeScreen";

export class Ticket extends Component {
  render() {
    return (
      <SafeScreen>
        <View>
          <Text>Ticket</Text>
        </View>
      </SafeScreen>
    );
  }
}

export default Ticket;
