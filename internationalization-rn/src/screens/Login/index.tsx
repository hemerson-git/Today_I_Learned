import { useState } from "react";
import { Heading, HStack, Pressable, Text, VStack } from "native-base";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../../components/LanguageButton";

export function Login() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  async function handleChangeLanguage(lang: string) {
    try {
      await i18n.changeLanguage(lang);
      setSelectedLanguage(lang);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <VStack bg="primary.700" flex={1} px="8" safeArea>
      <HStack justifyContent="center" space="md">
        <LanguageButton
          selected={selectedLanguage === "en"}
          title="English"
          onPress={() => handleChangeLanguage("en")}
        />

        <LanguageButton
          selected={selectedLanguage === "pt"}
          title="Português"
          onPress={() => handleChangeLanguage("pt")}
        />
      </HStack>

      <VStack flex={1} justifyContent="center">
        <Heading
          color="white"
          fontFamily="heading"
          fontSize="3xl"
          fontWeight="bold"
          mb="6"
          lineHeight="lg"
        >
          {t("Seja Bem-vindo")}
        </Heading>

        <Pressable
          bg="primary.500"
          h="12"
          justifyContent="center"
          alignItems="center"
          w="full"
          mb="4"
          borderRadius="md"
          _pressed={{
            opacity: 0.5,
          }}
        >
          <Text color="white">{t("Acessar")}</Text>
        </Pressable>

        <Pressable
          h="6"
          _pressed={{
            opacity: 0.5,
          }}
          justifyContent="center"
          alignItems="center"
          w="full"
          borderRadius="md"
        >
          <Text color="white">{t("Criar uma nova conta")}</Text>
        </Pressable>
      </VStack>
    </VStack>
  );
}
