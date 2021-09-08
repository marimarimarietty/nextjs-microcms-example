import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN が設定されていません')
}

if (!process.env.MICROCMS_APIKEY) {
  throw new Error('MICROCMS_APIKEY が設定されていません')
}

export const client = createClient ({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_APIKEY,
});
