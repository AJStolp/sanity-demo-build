import { INav } from "@/interfaces/INav";
import { client } from "@/lib/sanity.client";
import axios from "axios";
import { groq } from "next-sanity";

// const PROJECT_ID = process.env.SANITY_PROJECT_ID;
// const DATASET = process.env.SANITY_DATASET;
// const QUERY = encodeURIComponent('*[_type == "navigation"]');
// const sanityApi = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const query = groq`*[_type == "navigation"]{
  _id,
  link,
}`;

// export const getStaticProps = async () => {
//   const data = await client.fetch(query);

//   return { props: { data } };
// };

// export async function fetchedNavigation() {
//   // const response = await axios.get(sanityApi);
//   // return response.data.result;
//   const data = await client.fetch(query);
//   console.log(data, "daaata");
//   return { props: { data } };
// }
