const db = {
  "1hb": {
    "Starting Weapons": {
      name: "Starting Weapons",
      min: 1,
      max: 15,
      type: "1hb",
      blurb: "you start with em huh",
    },
    "Howling Skull": {
      name: "Howling Skull",
      min: 30,
      max: 50,
      type: "1hb",
      blurb: "Drops in TOTW",
      stats: {
        ql: {
          value: "SPECIAL",
          quality: "redBold",
        },
        dual: {
          value: "Yes",
          quality: "whiteBold",
        },
        aSpeed: {
          value: "1s",
          quality: "goldBold",
        },
        rSpeed: {
          value: "1s",
          quality: "goldBold",
        },
        range: {
          value: "3m",
          quality: "",
        },
        minDamage: {
          value: "28",
          quality: "",
        },
        maxDamage: {
          value: "112",
          quality: "whiteBold",
        },
        attackCap: {
          value: "700",
          quality: "goldBold",
        },
        init: {
          value: "Melee",
          quality: "",
        },
        multi: {
          value: "112",
          quality: "whiteBold",
        },
        specials: {
          value: "Fast Attack",
          quality: "",
        },
        reqs: {
          "1hb": {
            value: "305",
            quality: "redBold",
          },
          "Fast Attack": {
            value: "116",
            quality: "",
          },
        },
      },
    },
    "Skull of Misery/Despair": {
      name: "Skull of Misery/Despair",
      min: 175,
      max: 220,
      type: "1hb",
      blurb: "",
    },
  },
  "1he": {
    Chiroptera: {
      name: "Chiroptera",
      min: 100,
      max: 220,
      type: "1he",
      blurb: "",
    },
  },
  "2hb": {
    Howlet: {
      name: "Howlet",
      min: 100,
      max: 220,
      type: "2hb",
      blurb: "",
    },
  },
  "2he": {
    "Stygian Desolator": {
      name: "Stygian Desolator",
      min: 50,
      max: 150,
      type: "2he",
      blurb: "",
    },
  },
};

export default db;
