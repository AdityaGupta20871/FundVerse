import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import { ChainId,ThirdwebProvider } from "@thirdweb-dev/react";
 AdityaGupta20871
import './input.css'
import App from "./App";



const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider desiredChainId = {ChainId.Sepolia}>
    
=======

import App from "./App";
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider desiredChainId = {ChainId.Sepolia}>
 main
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
)