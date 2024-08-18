import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { SharedStateProvider } from "host/SharedStateProvider";

import App from "./App";

function main() {
  const rootElement = document.getElementById("app");
  if (!rootElement) {
    throw new Error("No root element found");
  }
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        {/* <SharedStateProvider> */}
        <App />
        {/* </SharedStateProvider> */}
      </BrowserRouter>
    </StrictMode>
  );
}

main();
