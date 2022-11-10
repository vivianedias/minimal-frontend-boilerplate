import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import { Head, Custom404 } from '../shared/components';

export default function NotFound() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head 
        title={t("errorPage.404.title")}
        description={t("errorPage.404.description")}
      />
      <Custom404 t={t} />
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
