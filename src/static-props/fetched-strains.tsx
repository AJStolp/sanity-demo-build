import { IStrain } from "@/interfaces/IStrain";
import axios from "axios";

const PROJECT_ID = "qosix616";
const DATASET = "production";
const QUERY = encodeURIComponent('*[_type == "strain"]');
const sanityApi = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

export async function fetchStrains(): Promise<IStrain[]> {
  const response = await axios.get(sanityApi);
  return response.data.result;
}
