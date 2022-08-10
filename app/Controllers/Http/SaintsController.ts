import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Saints from 'App/Models/Saints'
import { Saint } from 'interfaces/Saint'

export default class SaintsController {
  private saint = new Saints()

  public async getSaints(): Promise<Saint[]> {
    return await Saints.all()
  }

  public async getSaint({ params }: HttpContextContract): Promise<Saint | null> {
    const { id } = params
    return await Saints.findBy('id', id)
  }

  public async registerSaint({ request }: HttpContextContract): Promise<Saint> {
    const { name, constellation, range } = request.body()
    return await this.saint.fill({ name, constellation, range }).save()
  }
}
