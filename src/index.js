import React from "react";
import  * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App.jsx";    
import "bootstrap/dist/css/bootstrap.min.css";

const root =ReactDOMClient.createRoot(document.getElementById("root"))
root.render(<App></App>);

