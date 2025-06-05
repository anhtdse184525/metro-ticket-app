import { SafeAreaView } from "react-native-safe-area-context";

const SafeScreen = ({ children }) => {
  return (
    <SafeAreaView mode="padding" style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
};
export default SafeScreen;
