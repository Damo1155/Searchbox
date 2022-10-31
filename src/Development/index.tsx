import React from "react";
import ReactDom from "react-dom/client";

// Styles
import "../SCSS/core.scss";

// Components
import { App } from "./App";

ReactDom
    .createRoot(document.getElementById("root") as HTMLElement)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
