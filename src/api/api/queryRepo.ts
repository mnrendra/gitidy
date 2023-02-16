import { queries } from '@api/graphql'
import { isJSON, isString } from '@utils/validator'

const queryRepo = async (owner: string, repo: string) => {
  const { error, data } = await queries.repository(
    owner,
    repo
  )

  if (
    error ||
    !isJSON(data) ||
    !isJSON(data.repository) ||
    !isString(data.repository.id) ||
    !data.repository.id
  ) throw new Error(`Invalid response:\n${{ error, data }}`)

  return data
}

export default queryRepo
