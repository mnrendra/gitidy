import { EventEmitter } from 'node:events'
import { Options } from './types'
import argParser from './argParser'
import spawn from './spawn'

const spawnEvent = (cmd: string, args?: string[] | Options, opts?: Options) => {
  const emitter = new EventEmitter()

  const validArguments = argParser(cmd, args, opts)
  spawn(...validArguments, undefined, emitter)

  return emitter
}

export default spawnEvent
