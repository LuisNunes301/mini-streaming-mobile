import { NavigationContainer } from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

import { RootStackParamList } from "../types/navigation";
import RegisterScreen from "../screens/RegisterScreen";
import VideoDetailsScreen from "../screens/VideoDetailsScreen";
import VideoPlayerScreen from "../screens/VideoPLayerScreen";

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="VideoDetails"
          component={VideoDetailsScreen}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}