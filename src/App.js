import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./components/main-layout/MainLayout";
import Header from "./components/header/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root.render(<AppLayout />);
