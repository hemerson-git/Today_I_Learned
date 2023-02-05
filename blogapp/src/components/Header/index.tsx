import { Image, View } from "react-native";
import { Avatar, Container, Name, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <Avatar source={{ uri: "https://github.com/hemerson-git.png" }} />

      <View>
        <Name>Hemerson Oliveira</Name>
        <Title>Day 3</Title>
      </View>
    </Container>
  );
}
