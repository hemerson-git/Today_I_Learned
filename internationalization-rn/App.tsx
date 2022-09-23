import { NativeBaseProvider, StatusBar, Text } from "native-base";
import {
  useFonts,
  JetBrainsMono_400Regular,
  JetBrainsMono_600SemiBold,
  JetBrainsMono_700Bold,
} from "@expo-google-fonts/jetbrains-mono";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import "./src/utils/translation/i18n";

import { THEME } from "./src/themes/styles";

import { Login } from "./src/screens/Login";

export default function App() {
  const [isLoaded] = useFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_700Bold,
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!isLoaded) {
    return (
      <NativeBaseProvider>
        <Text>Loading</Text>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Login />
    </NativeBaseProvider>
  );
}
