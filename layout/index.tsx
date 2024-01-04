import React from "react";
import Header from "./header";
import Footer from "./footer";
type appProps = {
  children: React.ReactNode;
};

const Layout: React.FC<Partial<appProps>> = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
