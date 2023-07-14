import React, { useEffect } from "react";
import "./user.css";

const User = () => {
  useEffect(() => {
    console.log("useEffect");

    const timer = setInterval(() => {
      console.log("react");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  console.log("render");

  return (
    <div className="user-card">
      <h2>Name: Bishal</h2>
      <h3>Location: Sydeny</h3>
    </div>
  );
};

export default User;
