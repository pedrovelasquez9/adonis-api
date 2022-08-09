import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Saint } from 'interfaces/Saint'

export default class SaintsController {
  private saints: Saint[] = [
    {
      id: 1,
      name: 'Seiya',
      constellation: 'Pegasus',
      range: 'Bronze',
    },
    {
      id: 2,
      name: 'Ikky',
      constellation: 'Phoenix',
      range: 'Bronze',
    },
  ]

  public getSaints(): Saint[] {
    return this.saints
  }

  public getSaint({ params }: HttpContextContract): Saint[] {
    const { id } = params
    return this.saints.filter((saint) => saint.id === id)
  }

  public registerSaint({ request }: HttpContextContract): Saint {
    const data = request.body()
    let newSaint = JSON.parse(JSON.stringify(data))
    newSaint.id = this.saints.length + 1
    this.saints.push(newSaint)
    return newSaint
  }
}
