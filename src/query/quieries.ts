import { groq } from "next-sanity";

export const queryNav = groq`*[_type == "navigation"]{
  _id,
  title,
  href,
}`;

export const queryThemeToggle = groq`*[_type == "toggle"]{
  _id,
  themetoggle,
}`;
