// import { SanityDocument } from "@sanity/client";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { groq } from "next-sanity";
// import { client } from "../lib/sanity.client";
// import NavBar from "@/components/navbar";

// const query = groq`*[_type == "navigation" && slug.current == $slug][0]{
//   title,
//   link,
// }`;

// // Prepare Next.js to know which routes already exist
// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = await client.fetch(
//     groq`*[_type == "navigation" && defined(slug.current)][]{
//       "params": { "slug": slug.current }
//     }`
//   );

//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const queryParams = { slug: params?.slug ?? `` };

//   const navigation = await client.fetch(query, queryParams);

//   return {
//     props: {
//       data: { navigation },
//     },
//   };
// };

// export default function Page({
//   data,
// }: {
//   data: { navigation: SanityDocument };
// }) {
//   return <NavBar data={data} />;
// }
