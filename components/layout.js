import Navbar from "./Navbar";
import Footer from "./Footer";
import SuperDarkMode from "./SuperDarkMode";
import { useState } from "react";

export default function Layout({ children }) {
  const [superDark, setSuperDark] = useState(false);

  return (
    <SuperDarkMode superDark={superDark}>
      <Navbar superDark={superDark} setSuperDark={setSuperDark} />
      <main>{children}</main>
      <Footer />
    </SuperDarkMode>
  );
}
