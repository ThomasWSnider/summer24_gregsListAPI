import { homesService } from "../services/HomesService";
import BaseController from "../utils/BaseController";


export class HomesController extends BaseController {

  constructor() {
    super('api/homes')
    this.router.get('', this.getAllHomes)
  }

  async getAllHomes(request, response, next) {
    try {
      const homes = await homesService.getAllHomes()
      response.send(homes)
    } catch (error) {
      next(error)
    }
  }

  async homesSearch(request, response, next) {
    try {
      const searchQuery = request.query
      const homes = await homesService.homeSearch(searchQuery)
      response.send(homes)
    } catch (error) {
      next(error)
    }
  }
}