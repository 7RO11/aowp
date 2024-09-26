import "./App.css";

function Slider(props) {
  return (
    <div>
      <h2>Slide to adjust level</h2>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="220"
          value={props.level}
          className="slider"
          id="myRange"
          onChange={(event) => {
            props.setLevel(event.target.value);
          }}
        />
      </div>
      <p>{props.level}</p>
    </div>
  );
}

export default Slider;
