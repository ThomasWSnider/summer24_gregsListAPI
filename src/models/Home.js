import { Schema } from "mongoose";


export const HomeSchema = new Schema({
  bedrooms: { type: Number, min: 0, max: 1000, required: true },
  bathrooms: { type: Number, min: 0, max: 1000, required: true },
  levels: { type: Number, min: 0, max: 1000, required: true },
  imgUrl: { type: String, maxLength: 500, minLength: 0 },
  year: { type: Number, max: 2024, min: 1 },
  price: { type: Number, max: 10000000, min: 1, required: true },
  description: { type: String, minLength: 30, maxLength: 500, required: true },
  creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
}, { toJSON: { virtuals: true } })

HomeSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})