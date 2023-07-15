import React, { useState, useEffect } from "react";
import "./scroll-top.css";

const ScrollToTop = () => {
  const [scrollBtnActive, setScrollBtnActive] = useState(false);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      setScrollBtnActive(window.scrollY > 500);
    });
  };

  useEffect(() => {
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className={`scrollToTop-btn ${scrollBtnActive ? "active" : ""}`}
      onScroll={handleScroll}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-angle-up"></i>
    </div>
  );
};

export default ScrollToTop;
