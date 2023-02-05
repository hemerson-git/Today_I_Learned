import { useEffect } from "react";
import {
  FadeIn,
  FadeOut,
  FadingTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

import {
  AnimatedButton,
  Container,
  Percent,
  Progress,
  ProgressContent,
  Tracker,
} from "./styles";

type Props = {
  value: number;
  onPress?: () => void;
};

export function ProgressBar({ value, onPress }: Props) {
  const widthContainer = useSharedValue(200);

  const endReached = value >= 95;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(widthContainer.value, { mass: 0.4 }),
    };
  });

  useEffect(() => {
    widthContainer.value = endReached ? 56 : 200;
  }, [value]);

  return (
    <Container style={animatedStyle}>
      {endReached ? (
        <AnimatedButton onPress={onPress} entering={ZoomIn} exiting={ZoomOut}>
          <Feather name="chevron-up" color="#C4C4CC" size={24} />
        </AnimatedButton>
      ) : (
        <ProgressContent entering={FadeIn} exiting={FadeOut}>
          <Percent>{value}%</Percent>

          <Tracker>
            <Progress style={{ width: `${value}%` }} />
          </Tracker>
        </ProgressContent>
      )}
    </Container>
  );
}
