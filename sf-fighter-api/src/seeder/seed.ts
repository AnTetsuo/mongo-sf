import { Fighter } from "../models/Fighter.model";

export async function seed() {
  const fColl = await Fighter.find();
  if (fColl.length === 0) {
    await Fighter.deleteMany({});

    await Fighter.insertMany([
      { 
        name: 'Ryu', height: "1,75m", weight: "85 kgs",
        specialCommandList: [
          { name: "Hadoken", numPadNotation: "236@P", type: "motion", od: true },
          { name: "Shoryuken", numPadNotation: "623@P", type: "motion", od: true},
          { name: "Hashogeki", numPadNotation: "214@P", type: "motion", od: true },
          { name: "Tatsumaki Senpu-Kyaku", numPadNotation: "214@K", type: "motion", od: true, airOk: true },
          { name: "High Blade Kick", numPadNotation: "236@K", type: "motion", od: true },
          { name: "Denjin Charge", numPadNotation: "22@P", type: "motion" },
        ],
        superArts: [
          { name: "Shinku Hadoken", numPadNotation: "236236@P", type: "motion", cost: 1 },
          { name: "Shin Hashogeki", numPadNotation: "214214@P", type: "motion", cost: 2 },
          { name: "Shin Shoryuken", numPadNotation: "236236@K", type: "motion", cost: 3 }, 
        ],
        uniqueAttacks: [
          { name: "Collarbone Breaker", command: "6MP" },
          { name: "Solar Plexus Strinke", command: "6HP" },
          { name: "Short Uppercut", command: "4HP" },
          { name: "Axe Kick", command: "4HK" },
          { name: "Whirlwind Kick", command: "6HK" },
          { name: "High Double Strike", command: "HP_HK" },
          { name: "Fuwa Triple Strike", command: "MP_LK_HK" },
        ]
      },
      { 
        name: 'Ken', height: "1,75m", weight: "83 kgs",
        specialCommandList: [
          { name: "Hadoken", numPadNotation: "236@P", type: "motion", od: true },
          { name: "Shoryuken", numPadNotation: "623@P", type: "motion", od: true},
          { name: "Tatsumaki Senpu-Kyaku", numPadNotation: "214@K", type: "motion", od: true, airOk: true },
          { name: "Jinrai Kick", numPadNotation: "236@K", type: "motion", od: true, followUps: ["6LK", "6MK", "6HK", "OD6@K"] },
          { name: "Dragonlash Kick", numPadNotation: "623@K", type: "motion", od: true },
        ],
        superArts: [
          { name: "Dragonlash Flame", numPadNotation: "214214@K", type: "motion", cost: 1 },
          { name: "Shippu Jinrai-kyaku", numPadNotation: "236236@K", type: "motion", cost: 2 },
          { name: "Shinryu Reppa", numPadNotation: "236236@P", type: "motion", cost: 3 }, 
        ],
        uniqueAttacks: [
          { 
            name: "Quickdash", command: "KK", followUps: [
              "623@P",
              "623@K",
              "214@K",
              "LK", "MK", "HK"
              ]
          },
          { name: "Chin Buster", command: "MP_HP" },
          { name: "Triple Flash Kicks", command: "MK_MK_HK" },
        ]
      },
    ]);
    console.log("Seed Planted");
  }
}