import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/variables.css";
import "./styles/base.css";
import "./styles/nav.css";
import "./styles/hero.css";
import "./styles/changelog.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/cmdk.css";
import "./styles/responsive.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
