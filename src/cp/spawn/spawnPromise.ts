import { Options, SpawnType } from './types'
import argParser from './argParser'
import spawn from './spawn'

const spawnPromise = (cmd: string, args?: string[] | Options, opts?: Options) => {
  return new Promise<SpawnType>((resolve, reject) => {
    try {
      const validArguments = argParser(cmd, args, opts)
      spawn(...validArguments, stdio => resolve(stdio))
    } catch (err) {
      reject(err)
    }
  })
}

export default spawnPromise
