import { GetServerSideProps, GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import fetcher from '../shared/utils/fetcher'

import { Head } from '../shared/components'

export default function Home({ data }: { data: { name: string } }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head
        title={t("title")}
        description={t("description")}
      />
      <Box>{t("content")} - {data.name}</Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await fetcher('/api/hello')
  try {
    return {
      props: {
        data,
        locale: ctx.locale,
        ...(await serverSideTranslations(ctx.locale || "pt-BR", [
          "common",
          "header",
          "footer"
        ])),
      },
    }
  } catch (e) {
    return {
      props: {
        data: {
          name: 'Something went wrong'
        },
        locale: ctx.locale,
        ...(await serverSideTranslations(ctx.locale || "pt-BR", [
          "common",
          "header",
          "footer"
        ])),
      }
    }
  }
}