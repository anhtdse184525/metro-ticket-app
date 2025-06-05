import { Button, Text } from "react-native";
import SafeScreen from "../../components/templates/SafeScreen/SafeScreen";
import { useNavigation } from "@react-navigation/native";
import { Paths } from "../../navigation/paths";

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeScreen>
      <Text> Account </Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(Paths.Home)}
      />
    </SafeScreen>
  );
};

export default Account;
