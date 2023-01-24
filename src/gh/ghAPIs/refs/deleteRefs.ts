import { exec } from '@cp'

const deleteRefs = async (
  owner: string,
  repo: string,
  branch: string
) => new Promise<string>((resolve, reject) => {
  try {
    const args = ['api']

    args.push('--method DELETE')
    args.push('-H "Accept: application/vnd.github.v3+json"')
    args.push(`/repos/${owner}/${repo}/git/refs/heads/${branch}`)

    const cli = ['gh', ...args].join(' ')

    exec(cli).then(({ stdall }) => {
      resolve(stdall)
    }).catch(reject)
  } catch (err) {
    reject(err)
  }
})

export default deleteRefs
