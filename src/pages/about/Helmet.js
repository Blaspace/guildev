import React from "react";
import { Helmet } from "react-helmet-async";

function Helmets() {
  return (
    <Helmet>
      <title>Guilders Technology LTD - About</title>
      <meta
      property="og:title"
      content="Guilders Technology LTD - About"
    />
    <meta
      property="og:description"
      content="Guilders technologies leverages modern frameworks and industry best practices to
              build robust, interactive, and user-friendly web applications from
              concept to launch."
    />
    <meta
      name="description"
      content="Guilders technologies leverages modern frameworks and industry best practices to
              build robust, interactive, and user-friendly web applications from
              concept to launch."
    />
    </Helmet>
  );
}

export default Helmets;
