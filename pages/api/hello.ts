// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import logger from "logger";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logger.info("API Handler was called");
  res.status(200).json({ name: "John Doe" });
  // res.status(500)
}
