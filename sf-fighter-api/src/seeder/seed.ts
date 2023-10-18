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
      {
        name: 'Chun-li', height: "1,69m", weight: "secret",
        specialCommandList: [
          { name: "Kikoken", numPadNotation: "4H6@P", type: "hold", od: true },
          { name: "Hundred Lightining Kicks", numPadNotation: '236@K', type: 'motion', od: true, airOk: true, followUps: ["OD_KK"] },
          { name: "Spinning Bird Kick", numPadNotation: '2H8@K', type: 'hold', od: true },
          { name: "Hazanshu", numPadNotation: '214@K', type: 'motion', od: true },
          { name: "Tensho Kicks", numPadNotation: '22@K', type: 'motion', od: true },
        ],
        superArts: [
          { name: "Kikosho", numPadNotation: "236236@P", type: 'motion', cost: 1, airOk: true, },
          { name: "Hoyoku-sen", numPadNotation: "236236@K", type: 'motion', cost: 2 },
          { name: "Soten Ranka", numPadNotation: "214214@K", type: 'motion', cost: 3 },
        ],
        uniqueAttacks: [ 
          { name: "Swift Thrust", command: "2/6@MP" },
          { name: "Hakkei", command: "2HP"},
          { name: "Water Lotus Fist", command: "3HP"},
          { name: "Yokusen Kick", command: "6HK"},
          { name: "Falling Crane", command: "3HK"},
          { name: "Wall Jump", command: "J9"},
          { name: "Soaring Eagle Punches", command: "J_HP_HP"},
          { name: "Yoso Kick", command: "J_2MK_2MK_2MK"},
          { name: "Serenity Stream", command: "236@P", followUps:["LP", "MP", "HP", 'LK', 'MK', 'HK'] },
        ],
      },
      {
        name: 'Guile', height: '1,82m', weight: '99kg',
        specialCommandList: [
          { name: 'Sonic Boom', numPadNotation: '46@P', type: 'hold', od: true },
          { name: 'Somersault Kick', numPadNotation: '28@K', type: 'hold', od: true },
          { name: 'Sonic Blade', numPadNotation: '214@P', type: 'motion', od: true, followUps: ['6@P'] },
        ],
        superArts: [
          { name: 'Sonic Hurricane', numPadNotation: '4646@P', type: 'hold', cost: 1 },
          { name: 'Solid Puncher', numPadNotation: '214214@P', type: 'motion', cost: 2 },
          { name: 'Corssfire Somersault', numPadNotation: '4646@K', type: 'hold', cost: 3},
        ],
        uniqueAttacks: [
          { name: 'Full Bullet Magnum', command: '6MP'},
          { name: 'Burning Straight', command: '4HP'},
          { name: 'Spinning Back Knucle', command: '6HP'},
          { name: 'Knee Bazooka', command: '4LK'},
          { name: 'Rolling Sobat', command: '4MK | 6MK'},
          { name: 'Reverse Spin Kick', command: '6HK'},
          { name: 'Guile High Kick', command: '3HK'},
          { name: 'Recoil Canonn', command: 'MP_4HP'},
          { name: 'Double Shot', command: '2MP_2MP'},
          { name: 'Drake Fang', command: '2MK_6MP'},
          { name: 'Phantom Cutter', command: '2HK_3HK'} 
        ]
      }
    ]);
    console.log("Seed Planted");
  }
}