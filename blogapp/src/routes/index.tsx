import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { SignInRoutes } from "./SignInRoutes";

export function Routes() {
  const isLogged = true;

  return (
    <NavigationContainer>
      {isLogged ? <SignInRoutes /> : <View />}
    </NavigationContainer>
  );
}
