import { Schema, model } from 'mongoose';

const fighterSchema = new Schema<IFighter>(
  {
    name: { type: String, required: true },
    style: { type: String, required: true},
    age: { type: Number, required: true},
  }
);

export const Fighter = model<IFighter>('fighter', fighterSchema);