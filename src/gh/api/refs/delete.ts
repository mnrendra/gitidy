import { exec } from '@cp'
import log, { c } from '@clog'
import { Options } from './types'

const del = async (owner: string, repo: string, branch: string, {
  verbose
}: Options = {}) => new Promise<string>((resolve, reject) => {
  try {
    const args = ['api']

    args.push('--method DELETE')
    args.push('-H "Accept: application/vnd.github.v3+json"')
    args.push(`/repos/${owner}/${repo}/git/refs/heads/${branch}`)

    const cli = ['gh', ...args].join(' ')

    verbose && log(c.blue(`• ${cli}`))

    exec(cli).then(({ stdall }) => {
      verbose && log(c.grey(`  branch: ${branch}`))
      resolve(stdall)
    }).catch(reject)
  } catch (err) {
    reject(err)
  }
})

export default del
