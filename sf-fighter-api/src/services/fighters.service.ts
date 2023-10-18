import { ServRes } from "../interfaces/IService";
import { Fighter } from "../models/Fighter.model";
import { IFighter } from "../interfaces/IFighter";

const errMessages = {
  NOT_FOUND(id: string) {
    return `Fighter with ${id} not found!`
  }
}

export async function getAll(): Promise<ServRes<IFighter[]>> {
  const fighters = await Fighter.find();

  return { status: "OK", data: fighters }
}

export async function getById(id: string): Promise<ServRes<IFighter>> {
  const fighter = await Fighter.findById(id, '-__v');

  if (fighter === null) return { status: "NOT_FOUND", data: { message: errMessages.NOT_FOUND(id) } };

  return { status: 'OK', data: fighter };
}