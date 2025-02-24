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

export function grammatReverse(name) {
  // the reverse to slot into the db
  // oh no
  switch (name) {
    case "Sub-Machine Gun":
      return "Smg";
    case "Assault Rifle":
      return "Assault rifle";
    case "Melee Energy":
      return "Melee energy";
    case "Martial Arts":
      return "Martial arts";
    case "Ranged Energy":
      return "Ranged energy";
    case "1 Handed Blunt":
      return "1h Blunt";
    case "2 Handed Blunt":
      return "2h Blunt";
    case "1 Handed Edged":
      return "1h Edged";
    case "2 Handed Edged":
      return "2h Edged";
    default:
      return name;
  }
}
