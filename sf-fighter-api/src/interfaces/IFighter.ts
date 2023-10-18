interface commands {
  name: string,
  numPadNotation: string,
  type: "hold" | "motion",
  airOk?: boolean,
}

export type uniqueAttacks = {
  name: string,
  command: string,
  followUps?: string[],
}

export interface special extends commands {
  od?: boolean,
  airOk?: boolean,
  followUps?: string[],
} 

export interface superArt extends commands {
  cost: number,
}

export interface IFighter {
  name: string,
  height: string,
  weight: string,
  age: number,
  specialCommandList: special[],
  superArts: superArt[],
  uniqueAttacks: uniqueAttacks[],
}