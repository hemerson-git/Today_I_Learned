import { Image, VStack } from "native-base";

import Logo from "../../assets/movie.svg";

export function Home() {
  return (
    <VStack>
      <Image source={Logo} />
    </VStack>
  );
}
