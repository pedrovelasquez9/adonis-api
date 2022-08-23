import { ModelObject } from '@ioc:Adonis/Lucid/Orm'

export interface Saint {
  id: number
  name: string
  constellation: string
  range: string
}

export interface PaginatedSaint {
  meta: any
  data: ModelObject[]
}
