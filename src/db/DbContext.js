import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car.js';
import { HomeSchema } from "../models/Home";

class DbContext {

  Homes = mongoose.model('Home', HomeSchema)
  Cars = mongoose.model('Car', CarSchema)
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
