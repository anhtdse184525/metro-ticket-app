import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Paths } from "../../navigation/paths";
import SafeScreen from "../../components/templates/SafeScreen/SafeScreen";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeScreen>
      <Text>Home Screen </Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate(Paths.Account)}
      />
    </SafeScreen>
  );
};

export default Home;
