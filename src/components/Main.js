import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Dashboard from "./dashboard/dashboard";

const Main = (props) => {
  return (
    <div>
      <Header logo="IMC - Weather Forcast" />
      <Dashboard />
      <Footer text="CopyRight WBC.com from Footer Component" />
    </div>
  );
};

export default Main;
