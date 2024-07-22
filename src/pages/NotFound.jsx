import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      {/* <h2>Your such an asshole</h2> */}
      <h2>Page Not Found</h2>
      <p>
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the
        like).
      </p>

      <p>Go back to <Link to="/">Home</Link>.</p>
    </div>
  );
};

export default NotFound;
