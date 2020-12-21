import React from "react";
import Footer from "./footer";

function Layaout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layaout;
