export function grammat(name) {
  // since scraper exported them directly without capitals
  //  another band aid
  switch (name) {
    case "Smg":
      return "Sub-Machine Gun";
    case "Assault rifle":
      return "Assault Rifle";
    case "Melee energy":
      return "Melee Energy";
    case "Martial arts":
      return "Martial Arts";
    case "Ranged energy":
      return "Ranged Energy";
    default:
      return name;
  }
}
