import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

export const Container = styled(Animated.View)`
  height: 56px;
  background-color: #29292e;
  position: absolute;
  bottom: 32px;
  align-self: center;
  border-radius: 32px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Percent = styled.Text`
  color: #c4c5c4;
  margin-right: 6px;
`;

export const Tracker = styled.View`
  flex: 1;
  height: 3px;
  border-radius: 3px;
  background-color: #505059;
`;

export const Progress = styled.View`
  height: 3px;
  background-color: #8257e5;
`;

const ScrollButton = styled.TouchableOpacity``;

export const AnimatedButton = Animated.createAnimatedComponent(ScrollButton);

export const ProgressContent = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`;
