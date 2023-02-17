import { queries } from '@api/graphql'

const queryRepo = async (owner: string, repo: string) => {
  const { error, data } = await queries.repository(
    owner,
    repo,
  )

  if (error) throw new Error(error)

  return data
}

export default queryRepo
