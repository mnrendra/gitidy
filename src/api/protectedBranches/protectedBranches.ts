import update from './update'
import { Rule, Options } from './types'

const protectedBranches = async (owner: string, repo: string) => {
  const updateBranchProtection = async (branch: string, rule: Rule, opt: Options) => {
    const res = await update(owner, repo, branch, rule, opt)
    return res
  }

  return {
    update: updateBranchProtection
  }
}

export default protectedBranches
