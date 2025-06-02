import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Footer";
import "./Stage.css";

function Stage({ children }) {
  const { path } = useLocation();
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, [path]);
  return (
    <div className="app">
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Stage;
