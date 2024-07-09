import { dbContext } from "../db/DbContext"


class HomesService {


  async getAllHomes() {
    const homes = await dbContext.Homes.find().populate('creator', '-email')
  }
}

export const homesService = new HomesService()