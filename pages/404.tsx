import { GetStaticProps } from "next";
import NextLink from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

import { Box, Heading, Text, Center } from "@chakra-ui/react";
import { Head } from '../shared/components';

export default function NotFound() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head 
        title={t("errorPage.404.title")}
        description={t("errorPage.404.description")}
      />
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          {t("errorPage.404.title")}
        </Text>
        <Text color={"gray.500"} mb={6}>
          {t("errorPage.404.description")}
        </Text>

        <NextLink href="/">
          <Center
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            borderRadius="md"
            _hover={{
              bg: "teal.600",
            }}
            height={10}
            cursor="pointer"
          >
            <Text color="white" fontWeight={600}>
              {t("errorPage.404.home")}
            </Text>
          </Center>
        </NextLink>
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
