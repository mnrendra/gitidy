import { mutations } from '@api/graphql'
import { isJSON, isString } from '@utils/validator'

const createBranchProtection = async (repoId: string, pattern: string, rules: any) => {
  const { error, data } = await mutations.createBranchProtectionRule(
    repoId,
    pattern,
    rules
  )

  if (
    error ||
    !isJSON(data) ||
    !isJSON(data.createBranchProtectionRule) ||
    !isString(data.createBranchProtectionRule.clientMutationId)
  ) throw new Error(`Invalid response:\n${{ error, data }}`)

  return data
}

export default createBranchProtection
