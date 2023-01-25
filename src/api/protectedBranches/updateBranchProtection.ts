import log, { c } from '@clog'
import octokit from '../octokit'
import { Rule, defRule, Options } from './types'

const updateBranchProtection = async (
  owner: string,
  repo: string,
  branch: string,
  rule: Rule = defRule,
  {
    verbose
  }: Options
) => {
  verbose && log(c.blue(`• Protecting ${branch} branch`))

  const octo = await octokit()

  const res = await octo.request(`PUT /repos/${owner}/${repo}/branches/${branch}/protection`, {
    owner,
    repo,
    branch,
    ...rule,
  })

  verbose && log(c.grey(`  ${branch} branch is protected ✔️`))

  return res
}

export default updateBranchProtection
