import { exec } from '@cp'
import log, { c } from '@clog'
import { Data, Options } from './types'

const get = async (
  owner: string,
  repo: string,
  branch: string,
  {
    verbose,
  }: Options = {}
) => new Promise<Data>((resolve, reject) => {
  try {
    const args = ['api']

    args.push('--method GET')
    args.push('-H "Accept: application/vnd.github.v3+json"')
    args.push(`/repos/${owner}/${repo}/git/refs/heads/${branch}`)

    const cli = ['gh', ...args].join(' ')

    verbose && log(c.blue(`• ${cli}`))

    exec(cli).then(({ stdall }) => {
      try {
        const data: Data = JSON.parse(stdall)
        verbose && log(c.grey(`  sha: ${data && data.object && data.object.sha ? data.object.sha : '-'}`))
        resolve(data)
      } catch (err) {
        reject(err)
      }
    }).catch(reject)
  } catch (err) {
    reject(err)
  }
})

export default get
