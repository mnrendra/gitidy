import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import log, { c } from '@clog'
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
        if (err && err.cmd === cmd) {
          // const data: ExecType = {
          //   stdout: err.stdout,
          //   stderr: err.stderr,
          //   stdall: `${err.stdout} ${err.stderr}`.trim()
          // }

          // resolve(data)

          log(c.red(`${err.stdout} ${err.stderr}`.trim().split('\n').map(s => `  ${s}\n`).join('')))
          process.exit()
        } else reject(err)
      })
  })
}

export default execPromise
