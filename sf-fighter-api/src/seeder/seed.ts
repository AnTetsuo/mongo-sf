import { Fighter } from "../models/Fighter.model";

export async function seed() {
  if (Fighter.find() === null) {
    await Fighter.deleteMany({});

    await Fighter.insertMany([
      { name: 'Ryu', style: 'Karate', age: 41 },
      { name: 'Blanka', style: 'Jungle Ball', age: 38 },
      { name: 'Zangief', style: 'Wretle Cossack', age: 41 },
      { name: 'Ken', style: 'Karate', age: 40 },
      { name: 'Chun-li', style: 'Kung fu', age: 38 }
    ]);
    console.log("fighters seeded!");
  }
}