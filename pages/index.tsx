import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

import { Head } from '../shared/components'

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head
        title={t("title")}
        description={t("description")}
        icon={"/favicon.ico"}
      />
      <Box>{t("content")}</Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale || "", [
        "common",
        "header",
        "footer"
      ])),
    },
  };
}