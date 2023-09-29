import { ServRes } from "../interfaces/IService";
import { Fighter } from "../models/Fighter.model";

export async function getAll(): Promise<ServRes<IFighter[]>> {
  const fighters = await Fighter.find().select(['name', 'style', 'age']);

  return { status: "OK", data: fighters }
}