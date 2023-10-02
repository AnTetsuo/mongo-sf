import { Schema, model } from 'mongoose';
import { IFighter, special, superArt, uniqueAttacks } from '../interfaces/IFighter';

const specialListSchema = new Schema<special>(
  {
    name: { type: String, required: true },
    numPadNotation: { type: String, required: true},
    type: { type: String, required: true },
    od: { type: Boolean, required: false },
    airOk: { type: Boolean, required: false},
    followUps: { type: [String], default: undefined },
  }
)

const uniqueAttacksSchema = new Schema<uniqueAttacks>(
  {
    name: { type: String, required: true },
    command: { type: String, required: true },
    followUps: { type: [String], default: undefined }
  }
)

const superArtSchema = new Schema<superArt>(
  {
    name: { type: String, required: true },
    numPadNotation: { type: String, required: true},
    type: { type: String, required: true },
    cost: { type: Number, required: true },
  }
)

const fighterSchema = new Schema<IFighter>(
  {
    name: { type: String, required: true },
    height: { type: String, required: true},
    weight: { type: String, required: true},
    specialCommandList: { type: [specialListSchema], required: true },
    superArts: { type: [superArtSchema], required: true,},
    uniqueAttacks : { type: [uniqueAttacksSchema], required: true },
  }
);

export const Fighter = model<IFighter>('fighter', fighterSchema);