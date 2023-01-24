import { exec } from '@cp'
import { Data } from './types'

const getRefs = async (
  owner: string,
  repo: string,
  branch: string
) => new Promise<Data>((resolve, reject) => {
  try {
    const args = ['api']

    args.push('--method GET')
    args.push('-H "Accept: application/vnd.github.v3+json"')
    args.push(`/repos/${owner}/${repo}/git/refs/heads/${branch}`)

    const cli = ['gh', ...args].join(' ')

    exec(cli).then(({ stdall }) => {
      try {
        const data: Data = JSON.parse(stdall)
        resolve(data)
      } catch (err) {
        reject(err)
      }
    }).catch(reject)
  } catch (err) {
    reject(err)
  }
})

export default getRefs
