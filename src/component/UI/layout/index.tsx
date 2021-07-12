import { FC } from "react";
import Body from "./Body";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout: FC = (props) => {
  return (
    <>
      <NavBar />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
};

export default Layout;
