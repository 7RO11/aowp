import Footer from "./Footer";
import "./Stage.css";

function Stage({ children }) {
  return (
    <div className="app">
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Stage;
