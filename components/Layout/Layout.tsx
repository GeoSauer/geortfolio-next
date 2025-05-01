import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageBody from "./PageBody";
import PageHeading from "./PageHeading";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
  children: ReactNode;
  heading?: string;
};

export default function Layout({ children, heading }: LayoutProps) {
  return (
    <>
      <Navbar />
      <PageHeading>{heading}</PageHeading>
      <PageBody>{children}</PageBody>
      <Footer />
      <Analytics />
    </>
  );
}
