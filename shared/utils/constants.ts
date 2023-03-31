export const IS_IN_MAINTENANCE: boolean = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1"

// You should change the View ID to your own
export const AIRTABLE_PROD_VIEW_ID: string = "app6IPy987A1kEJLv";
export const AIRTABLE_STG_VIEW_ID: string = "app6IPy987A1kEJLv";

export const env: string =
  process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV || "development";
