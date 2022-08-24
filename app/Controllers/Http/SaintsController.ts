import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Saints from 'App/Models/Saints'
import { Saint } from 'interfaces/Saint'
import { buildDynamicSearchQuery } from './../../../utils/dbQueryHelpers'
import { PAGE_SIZE } from './../../../utils/constants'

export default class SaintsController {
  private saint = new Saints()

  public async getSaints({ request }): Promise<Saint[]> {
    const queryString = request.qs()
    return await Saints.query()
      .if(queryString, (query: ModelQueryBuilderContract<typeof Saints, Saints>) => {
        buildDynamicSearchQuery(query, queryString)
      })
      .paginate(1, PAGE_SIZE)
  }

  public async getSaint({ params }: HttpContextContract): Promise<Saint | null> {
    const { id } = params
    return await Saints.findByOrFail('id', id)
  }

  public async registerSaint({ request }: HttpContextContract): Promise<Saint> {
    const { name, constellation, range } = request.body()
    return await this.saint.fill({ name, constellation, range }).save()
  }

  public async updateSaint({ params, request }: HttpContextContract): Promise<Saint | null> {
    const { id } = params
    const saintData = request.body()
    const saint = await Saints.findByOrFail('id', id)
    return await saint.merge({ ...saintData }).save()
  }

  public async deleteSaint({ params }: HttpContextContract): Promise<void> {
    const { id } = params
    await (await Saints.findOrFail(id)).delete()
  }
}
