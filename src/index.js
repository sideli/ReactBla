import React from "react";
import ReactDOM from "react-dom";

import Bla from "./bla";

function App() {
  return (
    <div>
      <Bla />
      <ol>
        <li>jedna</li>
        <li>dva</li>
        <li>tri</li>
      </ol>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
