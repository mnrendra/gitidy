import { mutations } from '@api/graphql'
import { CreateBranchProtectionRuleInput } from '@api/graphql/mutations/createBranchProtectionRule/types'

const createBranchProtection = async (
  repoId: string,
  pattern: string,
  rules: CreateBranchProtectionRuleInput,
) => {
  const { error, data } = await mutations.createBranchProtectionRule(
    repoId,
    pattern,
    rules,
  )

  if (error) throw new Error(error)

  return data
}

export default createBranchProtection
