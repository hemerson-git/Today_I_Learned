import { IPressableProps, Pressable, Text } from "native-base";

interface LanguageButtonProps extends IPressableProps {
  title: string;
  selected?: boolean;
}

export function LanguageButton({
  title,
  selected,
  ...rest
}: LanguageButtonProps) {
  return (
    <Pressable
      px="4"
      py="2"
      borderWidth="1"
      borderColor={selected ? "primary.900" : "primary.500"}
      backgroundColor={selected ? "primary.500" : "primary.700"}
      rounded="2xl"
      _pressed={{
        backgroundColor: "primary.500",
        borderColor: "primary.900",
      }}
      {...rest}
    >
      <Text
        color={selected ? "primary.900" : "white"}
        fontWeight={selected ? "bold" : "normal"}
      >
        {title}
      </Text>
    </Pressable>
  );
}
