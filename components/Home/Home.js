import React from "react";
import Hero from "./Hero";
import FeaturedProject from "./FeaturedProject";
import LatestCode from "./LatestCode";

export default function Home({ repositories }) {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <LatestCode repositories={repositories} />
    </>
  );
}
