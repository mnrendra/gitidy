import { mutations } from '@api/graphql'

const createBranch = async (
  repoId = '',
  oid = '',
  name = '',
  clientMutationId = '',
) => {
  const { error, data } = await mutations.createRef(
    repoId,
    oid,
    name,
    clientMutationId,
  )

  if (error) throw new Error(error)

  return data
}

export default createBranch
