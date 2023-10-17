import React from "react";
import PageHeading from "../Layout/PageHeading";
import PageBody from "../Layout/PageBody";
import Hero from "./Hero";
import FeaturedProject from "./FeaturedProject";
import LatestCode from "./LatestCode";

export default function Home({ repositories }) {
  return (
    <>
      <PageHeading />
      <PageBody>
        <Hero />
        <FeaturedProject />
        <LatestCode repositories={repositories} />
      </PageBody>
    </>
  );
}
