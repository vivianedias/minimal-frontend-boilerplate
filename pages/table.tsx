import { GetServerSideProps } from "next";
import { Box } from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import log from "logger";
import { fetcher } from "shared/utils";
import { Head } from "shared/components";
import { Response } from "@/shared/types/airtable";

export default function Home({
  data,
  error,
}: {
  error: boolean;
  data: Response;
}) {
  const { t } = useTranslation("common");

  log.info(data);

  return (
    <>
      <Head title={t("title")} description={t("description")} />
      <Box>
        {t("content")}
        {data.map((i) =>
          i.name ? (
            <p key={i.id}>
              {i?.name} / {i?.notes} / {i?.assignee?.email} / {i?.status}{" "}
            </p>
          ) : null
        )}
      </Box>
      {error ? <p>There was an error while fetching the data</p> : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const data = await fetcher("/api/airtable");
    log.info("All good with the airtable page req");
    return {
      props: {
        data,
        locale: ctx.locale,
        ...(await serverSideTranslations(ctx.locale || "pt-BR", [
          "common",
          "header",
          "footer",
        ])),
      },
    };
  } catch (e) {
    log.error(e, "Something went wrong with the airtable page req");
    return {
      props: {
        data: null,
        error: true,
        locale: ctx.locale,
        ...(await serverSideTranslations(ctx.locale || "pt-BR", [
          "common",
          "header",
          "footer",
        ])),
      },
    };
  }
};
