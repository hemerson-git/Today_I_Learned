import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";
import { theme } from "../../styles/theme";

function Header() {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 2000 });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Feather name="arrow-left" color={theme.colors.brown} size={32} />

      <View>
        <Text style={styles.title}>Oriental Food</Text>

        <Text style={styles.subtitle}>Special Sushi</Text>
      </View>
    </Animated.View>
  );
}

export default Header;
