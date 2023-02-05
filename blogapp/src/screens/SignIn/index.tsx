import { Button } from "../../components/Button";
import { Container, Title } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function SignIn() {
  function handleSignIn() {}

  return (
    <Container>
      <Title>BlogApp</Title>
      <Button title="SignIn With Google">
        <MaterialCommunityIcons name="google" size={24} color="#000" />
      </Button>
    </Container>
  );
}
