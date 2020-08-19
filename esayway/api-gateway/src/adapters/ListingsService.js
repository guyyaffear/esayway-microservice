import got from "got";

// import accessEnv from "#root/helpers/accessEnv";

// const LISTINGS_SERVICE_URI = accessEnv("LISTINGS_SERVICE_URI");
const LISTINGS_SERVICE_URI = "http://listings-service:7100";
export default class ListingsService {
    static async fetchAllListings() {
        const body = await got.get(`${LISTINGS_SERVICE_URI}/listings`).json();
        return body;
      }
    }
