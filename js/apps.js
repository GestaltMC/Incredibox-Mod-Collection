// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = { // CELCIUS
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
  col2: "#0e24b8",
  col3: "#0062ff",
  col4: "#3e57f5",
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

versions.v2 = { // STARDUST
  name: "Stardust",
  version: "2",
  date: "2025",
  folder: "asset-v2/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 8000,
  bpm: 120,
  totalframe: 384, // fix the totalframe cuz animation was slow woops - Rizsim Studios
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#000000", 
  col0: "#7B00FF",
  col1: "#7B00FF",
  col2: "#4b1094",
  col3: "#8b27fc",
  col4: "#551f96",
  animearray: [
    {
      name: "1_lead",
      color: "47476b",
      uniqsnd: true, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_deux",
      color: "47476b",
      uniqsnd: true,
    },
    {
      name: "3_crepe",
      color: "47476b",
      uniqsnd: true,
    },
    {
      name: "4_clap",
      color: "47476b",
      uniqsnd: false,
    },
    {
      name: "5_tom",
      color: "47476b",
      uniqsnd: false,
    },
    {
      name: "6_bass",
      color: "2fb62f",
      uniqsnd: false,
    },
    {
      name: "7_dave",
      color: "2fb62f",
      uniqsnd: false,
    },
    {
      name: "8_terra",
      color: "2fb62f",
      uniqsnd: false,
    },
    {
      name: "9_uow",
      color: "2fb62f",
      uniqsnd: true,
    },
    {
      name: "10_phil",
      color: "2fb62f",
      uniqsnd: false,
    },
    {
      name: "11_piano",
      color: "e62e00",
      uniqsnd: false,
    },
    {
      name: "12_saturn",
      color: "e62e00",
      uniqsnd: false,
    },
    {
      name: "13_david",
      color: "e62e00",
      uniqsnd: true,
    },
    {
      name: "14_baas",
      color: "e62e00",
      uniqsnd: false,
    },
    {
      name: "15_starry",
      color: "e62e00",
      uniqsnd: false,
    },
    {
      name: "16_wayy",
      color: "8600b3",
      uniqsnd: false,
    },
    {
      name: "17_ahh",
      color: "8600b3",
      uniqsnd: false,
    },
    {
      name: "18_neptune",
      color: "8600b3",
      uniqsnd: true,
    },
    {
      name: "19_aye",
      color: "8600b3",
      uniqsnd: false,
    },
    {
      name: "20_ooh",
      color: "8600b3",
      uniqsnd: true,
    },
  ],
  bonusarray: [
    //No Bonuses yet again
  ],
};

versions.v3 = { // DREAMLAND
  name: "Dreamland",
  version: "3",
  date: "2025",
  folder: "asset-v3/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 13714,
  bpm: 140,
  totalframe: 1152, // fix the totalframe cuz animation was slow woops - Rizsim Studios
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#ffffff", 
  col0: "#2a266a",
  col1: "#2a266a",
  col2: "#2a266a",
  col3: "#373737",
  col4: "#232323",
  animearray: [
    {
      name: "1_heart",
      color: "b6a593",
      uniqsnd: true, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_switch",
      color: "da7f96",
      uniqsnd: true,
    },
    {
      name: "3_giftbox",
      color: "94dfc6",
      uniqsnd: true,
    },
    {
      name: "4_board",
      color: "e8bd85",
      uniqsnd: true,
    },
    {
      name: "5_tunnel",
      color: "51516c",
      uniqsnd: true,
    },
    {
      name: "6_pool bass",
      color: "6cefd5",
      uniqsnd: false,
    },
    {
      name: "7_signal lamp",
      color: "ffdc9a",
      uniqsnd: false,
    },
    {
      name: "8_steam",
      color: "93bcb0",
      uniqsnd: false,
    },
    {
      name: "9_cage",
      color: "87b0d8",
      uniqsnd: false,
    },
    {
      name: "10_umbrella",
      color: "f543af",
      uniqsnd: false,
    },
    {
      name: "11_graffiti",
      color: "687eff",
      uniqsnd: false,
    },
    {
      name: "12_lighthouse",
      color: "be5c74",
      uniqsnd: false,
    },
    {
      name: "13_gameboy",
      color: "66ebc8",
      uniqsnd: false,
    },
    {
      name: "14_engine",
      color: "f9e890",
      uniqsnd: false,
    },
    {
      name: "15_camera",
      color: "888caf",
      uniqsnd: false,
    },
    {
      name: "16_sleeper",
      color: "89a2bd",
      uniqsnd: false,
    },
    {
      name: "17_ice sculpture",
      color: "f66c6d",
      uniqsnd: true,
    },
    {
      name: "18_operator",
      color: "93ad9b",
      uniqsnd: false,
    },
    {
      name: "19_captain",
      color: "e6f0fc",
      uniqsnd: false,
    },
    {
      name: "20_radio",
      color: "a3acb7",
      uniqsnd: false,
    },
    {
      name: "21_petto",
      color: "6e6e6e",
      uniqsnd: false,
    },
    {
      name: "22_locke",
      color: "ff5290",
      uniqsnd: false,
    },
    {
      name: "23_computer",
      color: "06B187",
      uniqsnd: true,
    },
  ],
  bonusarray: [
    //No Bonuses yet again
  ],
};

versions.v4 = { // TRAVIS
  name: "Travis",
  version: "4",
  date: "2022",
  folder: "asset-v4/",
  looptime: 12000,
  bpm: 80,
  totalframe: 576,
  nbpolo: 7,
  bonusloopA: false,
  bonusendloopA: false,
  colBck: "#001c44",
  col0: "#0086d1",
  col1: "#1b4e91",
  col2: "#193e6f",
  col3: "#0d284c",
  col4: "#0a1c33",
  animearray: [{

    name: "1_kick",
    color: "860788",
    uniqsnd: false
  }, {
    name: "2_clap",
    color: "860788",
    uniqsnd: false
  }, {
    name: "3_snap",
    color: "860788",
    uniqsnd: true
  }, {
    name: "4_tuctuc",
    color: "860788",
    uniqsnd: false
  }, {
    name: "5_poom",
    color: "860788",
    uniqsnd: false
  }, {
    name: "6_bass",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "7_clicky",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "8_satellite",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "9_echo",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "10_steam",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "11_hooh",
    color: "cb2d3e",
    uniqsnd: false
  }, {
    name: "12_flute",
    color: "cb2d3e",
    uniqsnd: false
  }, {
    name: "13_euphoria",
    color: "cb2d3e",
    uniqsnd: false
  }, {
    name: "14_siren",
    color: "cb2d3e",
    uniqsnd: true
  }, {
    name: "15_arp",
    color: "cb2d3e",
    uniqsnd: false
  }, {
    name: "16_lie",
    color: "005090",
    uniqsnd: false
  }, {
    name: "17_mosaic",
    color: "005090",
    uniqsnd: false
  }, {
    name: "18_knowledge",
    color: "005090",
    uniqsnd: false
  }, {
    name: "19_toina",
    color: "005090",
    uniqsnd: false
  }, {
    name: "20_clock",
    color: "005090",
    uniqsnd: false
  }],
  bonusarray: [
    // No Bonuses 
    ]
};

versions.v5 = { // MECHANIC
  name: "Mechanic",
  version: "5",
  date: "2022",
  folder: "asset-v5/",
  looptime: 6857,
  bpm: 140,
  totalframe: 452,
  nbpolo: 7,
  bonusloopA: false,
  bonusendloopA: false,
  colBck: "#07002a",
  col0: "#564BB5",
  col1: "#4A3FA4",
  col2: "#362C86",
  col3: "#332184",
  col4: "#2C1A67",
  animearray: [{

    name: "1_pump",
    color: "860788",
    uniqsnd: true
  }, {
    name: "2_wheel",
    color: "860788",
    uniqsnd: true
  }, {
    name: "3_tiktuk",
    color: "860788",
    uniqsnd: true
  }, {
    name: "4_hammer",
    color: "860788",
    uniqsnd: true
  }, {
    name: "5_snare",
    color: "860788",
    uniqsnd: true
  }, {
    name: "6_bass",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "7_cube",
    color: "35b535",
    uniqsnd: true
  }, {
    name: "8_breather",
    color: "35b535",
    uniqsnd: true
  }, {
    name: "9_transition",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "10_hit",
    color: "35b535",
    uniqsnd: false
  }, {
    name: "11_alert",
    color: "cb2d3e",
    uniqsnd: false
  }, {
    name: "12_synth",
    color: "cb2d3e",
    uniqsnd: true
  }, {
    name: "13_beep",
    color: "cb2d3e",
    uniqsnd: true
  }, {
    name: "14_arpeg",
    color: "cb2d3e",
    uniqsnd: true
  }, {
    name: "15_tunbum",
    color: "cb2d3e",
    uniqsnd: false
  }, {
    name: "16_mechanic",
    color: "005090",
    uniqsnd: false
  }, {
    name: "17_struck",
    color: "005090",
    uniqsnd: false
  }, {
    name: "18_woah",
    color: "005090",
    uniqsnd: true
  }, {
    name: "19_hum",
    color: "005090",
    uniqsnd: true
  }, {
    name: "20_doot",
    color: "005090",
    uniqsnd: false
  }],
  bonusarray: [
    // No Bonuses 
    ]
};

versions.v6 = {
  name: "Ocean Breeze",
  version: "6",
  date: "2024",
  folder: "asset-v6/",
  looptime: 10666,
  bpm: 90,
  totalframe: 514,
  nbpolo: 7,
  bonusloopA: false,
  bonusendloopA: false,
  colBck: "#2f2e1a",
  col0: "#66e8e4",
  col1: "#12F0E9",
  col2: "#0ba39c",
  col3: "#0ac7c1",
  col4: "#0fb8b2",
  animearray: [{
    name: "01_Melon",
    color: "AEC52C",
    uniqsnd: true
  }, {
    name: "02_Barista",
    color: "B5A237",
    uniqsnd: true
  }, {
    name: "03_Chichika",
    color: "C5803D",
    uniqsnd: true
  }, {
    name: "04_Tourist",
    color: "DB5544",
    uniqsnd: true
  }, {
    name: "05_Tim",
    color: "F2254A",
    uniqsnd: true
  }, {
    name: "06_Scuba",
    color: "1E3362",
    uniqsnd: false
  }, {
    name: "07_Siren",
    color: "959595",
    uniqsnd: false
  }, {
    name: "08_Newsman",
    color: "394868",
    uniqsnd: true
  }, {
    name: "09_Dane",
    color: "5E677A",
    uniqsnd: true
  }, {
    name: "10_Lifeguard",
    color: "777B85",
    uniqsnd: true
  }, {
    name: "11_Coconut",
    color: "E15A18",
    uniqsnd: true
  }, {
    name: "12_Uku",
    color: "2B6B53",
    uniqsnd: true
  }, {
    name: "13_Terra",
    color: "5E6541",
    uniqsnd: false
  }, {
    name: "14_Band",
    color: "B35D25",
    uniqsnd: true
  }, {
    name: "15_Jellyfish",
    color: "896132",
    uniqsnd: false
  }, {
    name: "16_Sunrise",
    color: "E16B1E",
    uniqsnd: false
  }, {
    name: "17_Tiki",
    color: "6F1E1F",
    uniqsnd: true
  }, {
    name: "18_Captain",
    color: "3D3D7D",
    uniqsnd: true
  }, {
    name: "19_Sungod",
    color: "C23B19",
    uniqsnd: true
  }, {
    name: "20_Rapper",
    color: "AD2116",
    uniqsnd: true
  }],
  bonusarray: [
    // { // BONUS 1
    //   name: "Quickdraw",
    //   src: "b1-quickdraw",
    //   code: "1,10,11,14,17",
    //   sound: "bonus-quickdraw",
    //   aspire: "aspire-quickdraw",
    //   loop: 3,
    // },
    // {
    //   name: "Busta",
    //   src: "v6-b2-busta-hb",
    //   code: "1,2,8,11,16",
    //   sound: "bonus-busta",
    //   aspire: "aspire-busta",
    //   loop: 3,
    // },
    // {
    //   name: "VR",
    //   src: "v6-b3-vr-hb",
    //   code: "3,8,11,12,20",
    //   sound: "bonus-vr",
    //   aspire: "aspire-vr",
    //   loop: 3,
    // },
  ]
};
