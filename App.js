import React from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "./Images/Food Fire Logo.png";
import './index.css';
import { render } from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body"


const AppLayout = () => {
  return  (
    <div className="app">
      <Header/>
      <Body/>
    </div>
    

  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);