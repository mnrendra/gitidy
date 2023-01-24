import { exec } from '@cp'
import log, { c } from '@clog'
import { Data, Options } from './types'

const postRefs = async (owner: string, repo: string, sha: string, branch: string, {
  verbose
}: Options = {}) => new Promise<Data>((resolve, reject) => {
  try {
    const args = ['api']

    args.push('--method POST')
    args.push('-H "Accept: application/vnd.github.v3+json"')
    args.push(`/repos/${owner}/${repo}/git/refs`)
    args.push(`-f ref="refs/heads/${branch}"`)
    args.push(`-f sha="${sha}"`)

    const cli = ['gh', ...args].join(' ')

    verbose && log(c.blue(`• ${cli}`))

    exec(cli).then(({ stdall }) => {
      try {
        const data: Data = JSON.parse(stdall)
        verbose && log(c.grey(`  sha: ${data && data.object && data.object.sha ? data.object.sha : '-'}, branch: ${branch}`))
        resolve(data)
      } catch (err) {
        reject(err)
      }
    }).catch(reject)
  } catch (err) {
    reject(err)
  }
})

export default postRefs
