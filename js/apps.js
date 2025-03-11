// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Celcius",
  version: "1",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 13710,
  bpm: 140,
  totalframe: 658,
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#020d45",
  col0: "#2bb0d1",
  col1: "#1a35e6",
  col2: "#2666de",
  col3: "#00bfff",
  col4: "#85b6ff",
  animearray: [
    {
      name: "01_Eskimo",
      color: "00297b",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "02_Snowboarder",
      color: "00297b",
      uniqsnd: !0,
    },
    {
      name: "03_Climber",
      color: "00297b",
      uniqsnd: !1,
    },
    {
      name: "04_Open Coat Guy",
      color: "00297b",
      uniqsnd: !0,
    },
    {
      name: "05_Cool Guy",
      color: "00297b",
      uniqsnd: !0,
    },
    {
      name: "06_Explorer",
      color: "6987c6",
      uniqsnd: !0,
    },
    {
      name: "07_Masked",
      color: "6987c6",
      uniqsnd: !1,
    },
    {
      name: "08_Icicle",
      color: "6987c6",
      uniqsnd: !0,
    },
    {
      name: "09_Bear",
      color: "6987c6",
      uniqsnd: !0,
    },
    {
      name: "10_Frozen Specimen",
      color: "6987c6",
      uniqsnd: !0,
    },
    {
      name: "11_Icebot",
      color: "668daa",
      uniqsnd: !0,
    },
    {
      name: "12_Cavernous",
      color: "668daa",
      uniqsnd: !0,
    },
    {
      name: "13_Snowman",
      color: "668daa",
      uniqsnd: !0,
    },
    {
      name: "14_Lead",
      color: "668daa",
      uniqsnd: !1,
    },
    {
      name: "15_Pinecone",
      color: "668daa",
      uniqsnd: !1,
    },
    {
      name: "16_Emo Rapper",
      color: "52b4b5",
      uniqsnd: !0,
    },
    {
      name: "17_Guard",
      color: "52b4b5",
      uniqsnd: !0,
    },
    {
      name: "18_Penguin",
      color: "52b4b5",
      uniqsnd: !1,
    },
    {
      name: "19_Terra",
      color: "52b4b5",
      uniqsnd: !0,
    },
    {
      name: "20_The Betrayed",
      color: "52b4b5",
      uniqsnd: !0,
    },
  ],
  bonusarray: [
    // No Bonuses
  ],
};

// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v2 = {
  name: "Stardust",
  version: "2",
  date: "2025",
  folder: "asset-v2/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 8000,
  bpm: 120,
  totalframe: 260,
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "##7B00FF",
  col0: "##7B00FF",
  col1: "##7B00FF",
  col2: "##7B00FF",
  col3: "##7B00FF",
  col4: "##7B00FF",
  animearray: [
    {
      name: "1_lead",
      color: "#47476b",
      uniqsnd: true, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_deux",
      color: "#47476b",
      uniqsnd: true,
    },
    {
      name: "3_crepe",
      color: "#47476b",
      uniqsnd: true,
    },
    {
      name: "4_clap",
      color: "#47476b",
      uniqsnd: false,
    },
    {
      name: "5_tom",
      color: "#47476b",
      uniqsnd: false,
    },
    {
      name: "6_bass",
      color: "#2fb62f",
      uniqsnd: false,
    },
    {
      name: "7_dave",
      color: "#2fb62f",
      uniqsnd: false,
    },
    {
      name: "8_terra",
      color: "#2fb62f",
      uniqsnd: false,
    },
    {
      name: "9_uow",
      color: "#2fb62f",
      uniqsnd: true,
    },
    {
      name: "10_Phil",
      color: "#2fb62f",
      uniqsnd: false,
    },
    {
      name: "11_piano",
      color: "#e62e00",
      uniqsnd: false,
    },
    {
      name: "12_saturn",
      color: "#e62e00",
      uniqsnd: false,
    },
    {
      name: "13_david",
      color: "#e62e00",
      uniqsnd: true,
    },
    {
      name: "14_baas",
      color: "#e62e00",
      uniqsnd: false,
    },
    {
      name: "15_starry",
      color: "#e62e00",
      uniqsnd: false,
    },
    {
      name: "16_wayy",
      color: "#8600b3",
      uniqsnd: false,
    },
    {
      name: "17_ahh",
      color: "#8600b3",
      uniqsnd: false,
    },
    {
      name: "18_neptune",
      color: "#8600b3",
      uniqsnd: true,
    },
    {
      name: "19_aye",
      color: "#8600b3",
      uniqsnd: false,
    },
    {
      name: "20_ooh",
      color: "#8600b3",
      uniqsnd: true,
    },
  ],
  bonusarray: [
    //No Bonuses yet again
  ],
};

// versions.v3 = {
//  name: "New Version",
// version: "3",
// date: "2025",
// ...
