import { exec } from 'node:child_process'
import { EventEmitter } from 'node:events'
import { ExecType } from './types'

const execEvent = (cmd: string, opts = {}) => {
  const emitter = new EventEmitter()

  exec(cmd, opts, (error, stdout, stderr) => {
    const stdOut = typeof stdout === 'string' ? stdout.trim() : stdout
    const stdErr = typeof stderr === 'string' ? stderr.trim() : stderr

    if (error && error.cmd !== cmd) emitter.emit('error', error)
    if (stdOut) emitter.emit('stdout', stdOut)
    if (stdErr) emitter.emit('stderr', stdErr)

    const data: ExecType = {
      stdout: stdOut,
      stderr: stdErr,
      stdall: `${stdOut} ${stdErr}`.trim()
    }

    emitter.emit('close', data)
  })

  return emitter
}

export default execEvent
