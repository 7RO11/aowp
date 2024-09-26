import "./App.css";

function Items(props) {
  function isGray(level, min, max) {
    if (level >= min && level <= max) {
      return false;
    }
    return true;
  }
  let items = [
    { name: "Starting Weapons", min: 1, max: 15 },
    { name: "Howling Skull", min: 30, max: 50 },
    { name: "Skull of Misery/Despair", min: 175, max: 220 },
  ];
  return (
    <div>
      {items.map((item) => {
        return (
          <p
            className={
              isGray(Number(props.level), item.min, item.max)
                ? "grayed"
                : "white"
            }
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
}

export default Items;
