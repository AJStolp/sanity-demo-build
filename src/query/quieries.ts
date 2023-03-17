import { groq } from "next-sanity";

export const queryNav = groq`*[_type == "navigation"]{
  _id,
  link,
}`;
