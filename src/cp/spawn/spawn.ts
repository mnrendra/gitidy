import { spawn as cpSpawn } from 'node:child_process'
import { EventEmitter } from 'node:events'
import { Options, SpawnType, StdioOptionEnum } from './types'

const spawn = (
  command: string,
  args: string[],
  options: Options = { stdio: StdioOptionEnum.Pipe },
  callback?: (data: SpawnType) => void,
  emitter?: EventEmitter
) => {
  options.stdio = options.stdio === StdioOptionEnum.Inherit
    ? [StdioOptionEnum.Pipe, StdioOptionEnum.Inherit, StdioOptionEnum.Inherit]
    : options.stdio

  options.stdio = options.stdio === StdioOptionEnum.Ignore
    ? [StdioOptionEnum.Pipe, StdioOptionEnum.Ignore, StdioOptionEnum.Ignore]
    : options.stdio

  let stdOut = ''
  let stdErr = ''
  let stdAll = ''

  const spwn = cpSpawn(command, args, options)
  
  spwn.stdout && spwn.stdout.on('data', (buff) => {
    const data = buff.toString().trim()
    stdOut = `${stdOut} ${data}`.trim()
    stdAll = `${stdErr} ${data}`.trim()
    emitter && emitter.emit('stdout', data)
  })
  
  spwn.stderr && spwn.stderr.on('data', (buff) => {
    const data = buff.toString().trim()
    stdOut = `${stdOut} ${data}`.trim()
    stdAll = `${stdErr} ${data}`.trim()
    emitter && emitter.emit('stderr', data)
  })
  
  spwn.on('close', (code, signal) => {
    const output: SpawnType = {
      stdall: stdAll,
      stdout: stdOut,
      stderr: stdErr,
      code,
      signal
    }

    emitter && emitter.emit('close', output)
    callback && callback(output)
  })

  return stdOut
}

export default spawn
