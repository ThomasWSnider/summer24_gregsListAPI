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
}