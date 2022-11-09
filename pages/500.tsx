import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Head } from "../shared/components";

export default function ServerError() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <>
      <Head 
        title={t("errorPage.500.title")}
        description={t("errorPage.500.description")}
      />
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          500
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          {t("errorPage.500.title")}
        </Text>
        <Text color={"gray.500"} mb={6}>
          {t("errorPage.500.description")}
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
          onClick={() => router.back()}
        >
          {t("errorPage.500.home")}
        </Button>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || "pt-BR", [
        "common",
        "header",
        "footer"
      ])),
    },
  };
}
