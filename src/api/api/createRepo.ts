import { create } from '@api/cli/repo'

const createRepo = async (
  owner: string,
  repo: string,
) => {
  return await create(
    owner,
    repo,
    {
      verbose: true,
    },
  )
}

export default createRepo
