import updateBranch from './updateBranchProtection'
import createCommitSignature from './createCommitSignatureProtection'

import { Rule, Options, Props } from './types'

const protectedBranches = async ({ owner, repo }: Props) => {
  const updateBranchProtection = async (branch: string, rule: Rule, opt: Options) => {
    const res = await updateBranch(owner, repo, branch, rule, opt)
    return res
  }

  const createCommitSignatureProtection = async (branch: string, opt: Options) => {
    const res = await createCommitSignature(owner, repo, branch, opt)
    return res
  }

  return {
    updateBranchProtection,
    createCommitSignatureProtection
  }
}

export default protectedBranches
