import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Account from "../screens/Account/Account";
import Information from "../screens/Information/Information";
import Ticket from "../screens/Ticket/Ticket";
import { Paths } from "./paths";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Metro from "../screens/Metro/Metro";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "../theme/useTheme";

const Tab = createBottomTabNavigator();

const ApplicationNavigator = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === Paths.Home) {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === Paths.Ticket) {
                iconName = focused ? "ticket" : "ticket-outline";
              } else if (route.name === Paths.Metro) {
                iconName = focused ? "train" : "train-outline";
              } else if (route.name === Paths.Information) {
                iconName = focused
                  ? "information-circle"
                  : "information-circle-outline";
              } else if (route.name === Paths.Account) {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.primary,
            tabBarInactiveTintColor: theme.color,
            tabBarStyle: {
              height: 60,
              paddingTop: 5,
              backgroundColor: theme.cardBg,
            },
            tabBarShowLabel: false,
          })}
        >
          <Tab.Screen component={Home} name={Paths.Home} />
          <Tab.Screen component={Ticket} name={Paths.Ticket} />
          <Tab.Screen component={Metro} name={Paths.Metro} />
          <Tab.Screen component={Information} name={Paths.Information} />
          <Tab.Screen component={Account} name={Paths.Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
