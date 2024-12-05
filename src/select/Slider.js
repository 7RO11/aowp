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
      <form className="numberIn">
        <label for="quantity">or input into this field </label>
        <input
          name="quantity"
          className="numField"
          min="1"
          max="220"
          value={props.level}
          onChange={(event) => {
            props.setLevel(event.target.value);
          }}
        />
      </form>
      <h2>Level {props.level}</h2>
    </div>
  );
}

export default Slider;
