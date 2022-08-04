import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Saints } from 'interfaces/Saints'

export default class SaintsController {
  private saints = [
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

  public async getSaints({ params }: HttpContextContract) {
    let response: Saints[] = []
    params.id
      ? (response = this.saints.filter((saint) => saint.id === params.id))
      : (response = this.saints)
    return response
  }

  public async registerSaint(data) {
    let newSaint = JSON.parse(JSON.stringify(data))
    newSaint.id = this.saints.length + 1
    this.saints.push(newSaint)
    return this.saints
  }
}
