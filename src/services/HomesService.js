import { dbContext } from "../db/DbContext"


class HomesService {


  async getAllHomes() {
    const homes = await dbContext.Homes.find().populate('creator', '-email')
    return homes
  }

  async homeSearch(searchQuery) {
    const homes = await dbContext.Homes.find(searchQuery)
  }
}

export const homesService = new HomesService()