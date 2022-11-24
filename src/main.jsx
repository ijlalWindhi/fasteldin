import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// chakra-ui import
import { ChakraProvider } from "@chakra-ui/react";

// react-router-dom import
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Router>
);
