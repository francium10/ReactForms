/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./Components/Form";

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
