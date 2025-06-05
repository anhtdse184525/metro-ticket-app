import { GestureHandlerRootView } from "react-native-gesture-handler";
import ApplicationNavigator from "./navigation/Application";
import SafeScreen from "./components/templates/SafeScreen/SafeScreen";
import { ThemeProvider } from "./theme/useTheme";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GestureHandlerRootView>
          <ApplicationNavigator />
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
