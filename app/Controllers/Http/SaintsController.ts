// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SaintsController {
  public async getSaints() {
    return [
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
  }

  public async registerSaint(data) {
    return data
  }
}
