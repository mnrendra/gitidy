import log, { c } from '@clog'
import octokit from '@api/octokit'
import { Options } from './types'

const createCommitSignatureProtection = async (
  owner: string,
  repo: string,
  branch: string,
  {
    verbose,
  }: Options
) => {
  verbose && log(c.blue(`• Protecting ${branch} branch`))

  const octo = await octokit()

  const res = await octo.request(`POST /repos/${owner}/${repo}/branches/${branch}/protection/required_signatures`)

  verbose && log(c.grey(`  ${branch} branch is protected with signed commit ✔️`))

  return res
}

export default createCommitSignatureProtection
