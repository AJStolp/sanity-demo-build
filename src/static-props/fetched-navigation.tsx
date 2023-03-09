import { INav } from "@/interfaces/INav";
import axios from "axios";

const PROJECT_ID = process.env.SANITY_PROJECT_ID;
const DATASET = process.env.SANITY_DATASET;
const QUERY = encodeURIComponent('*[_type == "navigation"]');
const sanityApi = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

export async function fetchedNavigation(): Promise<INav[]> {
  const response = await axios.get(sanityApi);
  return response.data.result;
}
