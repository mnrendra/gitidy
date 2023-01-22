import log, { c } from '@clog'
import { Options, SpawnType } from './types'
import argParser from './argParser'
import spawn from './spawn'

const spawnPromise = (cmd: string, args?: string[] | Options, opts?: Options) => {
  return new Promise<SpawnType>((resolve, reject) => {
    let validArguments: [string, string[], any] | undefined
    try {
      validArguments = argParser(cmd, args, opts)
      spawn(...validArguments, stdio => resolve(stdio))
    } catch (err: any) {
      if (validArguments && err && err.cmd === [validArguments[0], ...validArguments[1]].join(' ')) {
        // const output: SpawnType = {
        //   stdall: `${err.stdout} ${err.stderr}`.trim(),
        //   stdout: err.stdout,
        //   stderr: err.stderr,
        //   code: undefined,
        //   signal: undefined
        // }

        // resolve(output)

        log(c.red(`${err.stdout} ${err.stderr}`.trim().split('\n').map(s => `  ${s}\n`).join('')))
        process.exit()
      } else reject(err)
    }
  })
}

export default spawnPromise
