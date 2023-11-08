import { Repositories } from "@/lib/getLatestRepos";
import FeaturedProject from "./FeaturedProject";
import Hero from "./Hero";
import LatestCode from "./LatestCode";

export default function Home({ repositories }: Repositories) {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <LatestCode repositories={repositories} />
    </>
  );
}
