function Slider(props) {
  return (
    <div>
      <h1>Slide to adjust level</h1>
      <div>
        <input
          type="range"
          min="1"
          max="220"
          value={props.level}
          className="slider"
          onChange={(event) => {
            props.setLevel(event.target.value);
          }}
        />
      </div>
      <h2>Level {props.level}</h2>
    </div>
  );
}

export default Slider;
