import "./App.css";
import Footer from "./Footer";
import db from "./Itemdb";

function Description(props) {
  console.log(props.item);
  return (
    <div className="App">
      <div className="App-header">
        <h2>{props.item.name}</h2>
        <p className="blurb">{props.item.blurb}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Description;
