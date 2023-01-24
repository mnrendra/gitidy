import update from './update'
import { Rule, Options } from './types'

const protectedBranches = async (owner: string, repo: string) => {
  const updateBranchProtection = (branch: string, rule: Rule, opt: Options) => {
    update(owner, repo, branch, rule, opt)
  }

  return {
    update: updateBranchProtection
  }
}

export default protectedBranches
