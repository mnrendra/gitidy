import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { ExecType } from './types'

const execPromise = (cmd: string, opts = {}) => {
  return new Promise<ExecType>((resolve, reject) => {
    promisify(exec)(cmd, opts)
      .then(({ stdout, stderr }) => {
        const stdOut = stdout.trim()
        const stdErr = stderr.trim()

        const data: ExecType = {
          stdout: stdOut,
          stderr: stdErr,
          stdall: `${stdOut} ${stdErr}`.trim()
        }

        resolve(data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export default execPromise