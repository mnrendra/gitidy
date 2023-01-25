import update from './updateBranchProtection'
import { Rule, Options, Props } from './types'

const protectedBranches = async ({ owner, repo }: Props) => {
  const updateBranchProtection = async (branch: string, rule: Rule, opt: Options) => {
    const res = await update(owner, repo, branch, rule, opt)
    return res
  }

  return {
    updateBranchProtection
  }
}

export default protectedBranches
