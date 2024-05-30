// src/sanity.js
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "5jq4jzar",
  dataset: "production",
  useCdn: true,
});
