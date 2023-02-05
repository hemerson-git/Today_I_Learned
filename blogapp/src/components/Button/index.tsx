import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  children?: ReactNode;
};

export function Button({ title, children, ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      {children}
      <Title>{title}</Title>
    </ButtonContainer>
  );
}
