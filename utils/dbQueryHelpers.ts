import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Saints from 'App/Models/Saints'

export const buildDynamicSearchQuery = (
  query: ModelQueryBuilderContract<typeof Saints, Saints>,
  queryString
) => {
  for (let key in queryString) {
    return query.where(key, 'like', `%${queryString[key]}%`)
  }
}
