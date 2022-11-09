import { Head } from "@/shared/components";
import { Box, Heading, Text, Icon, VStack, Circle } from "@chakra-ui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || "pt-BR", [
        "maintenance",
      ])),
    },
  };
}


export default function Maintenance() {
  const { t } = useTranslation("maintenance")

  return (
    <>
      <Head 
        title={t("title")}
        description={t("description")}
      />
      <VStack
        as="article"
        bgColor={"red.500"}
        width={"100%"}
        height={"100vh"}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
        spacing={6}
      >
        <Circle bgColor={"white"} size={"75px"}>
          <Icon as={ExclamationTriangleIcon} color={"red.500"} boxSize={"55px"} />
        </Circle>
        <Heading as="h1" size={"2xl"}>
          {t("heading")}
        </Heading>
        <Box maxW={"40%"}>
          <Text textAlign={"center"} fontSize={"lg"} mb={6}>
            {t("description")}{" "}{t("statusUpdate1")}
            <a href="https://www.twitter.com/">Twitter</a>{" "}
            {t("statusUpdate2")}
          </Text>
          <Text textAlign={"center"}>{t("signature")}</Text>
        </Box>
      </VStack>
    </>
  );
}
