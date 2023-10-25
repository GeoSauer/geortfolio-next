import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHeading from "./PageHeading";
import PageBody from "./PageBody";

export default function Layout({ children, heading }) {
  return (
    <>
      <Navbar />
      <PageHeading>{heading}</PageHeading>
      <PageBody>{children}</PageBody>
      <Footer />
    </>
  );
}
