import type { NextApiRequest, NextApiResponse } from "next";
import log from "logger";
import {
  AIRTABLE_PROD_VIEW_ID,
  AIRTABLE_STG_VIEW_ID,
  env,
  fetcher,
} from "shared/utils";
import { Records, Response } from "shared/types/airtable";

const parse = ({ records }: { records: Records[] }) => {
  return records.map((record: Records) => {
    return {
      id: record.id,
      createdAt: record.createdTime,
      ...record.fields,
    };
  });
};

async function fetchTable(endpoint: string): Promise<Response> {
  const token = process.env.AIRTABLE_API_KEY;
  const opts = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    isExternal: true,
  };

  const data = await fetcher(endpoint, opts);

  return parse(data);
}

function getEndpoint(tableName: string, lng: string | string[]) {
  const tableId =
    env !== "production" ? AIRTABLE_STG_VIEW_ID : AIRTABLE_PROD_VIEW_ID;

  return `https://api.airtable.com/v0/${tableId}/${tableName}__${lng}?maxRecords=100&view=Grid%20view`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | string>
) {
  try {
    const { query } = req;
    const lng = query.lng || "pt-BR";
    const endpoint = getEndpoint("test", lng);
    const data = await fetchTable(endpoint);

    res.status(200).json(data);
  } catch (e) {
    log.error(e, `Request to airtable API failed`);
    res.status(400).send(`Request to airtable API failed ${e}`);
  }
}
