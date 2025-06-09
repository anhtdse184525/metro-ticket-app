import { StyleSheet, Text, View } from "react-native";
import SafeScreen from "../../components/templates/SafeScreen/SafeScreen";
import { useNavigation } from "@react-navigation/native";
import { Paths } from "../../navigation/paths";
import { typeVariants } from "../../theme/theme";

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeScreen>
      <View style={styles.title}>
        <Text style={typeVariants.titleLarge}>Profile</Text>
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
  },
});
export default Account;
