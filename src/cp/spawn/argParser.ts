import { Options, StdioOptionEnum } from './types'

export const argParser = (
  command: string,
  argsOrOpts?: string[] | Options,
  options?: Options
): [string, string[], Options] => {
  let cmd: string = ''
  let args: string[] = []
  let opts: Options = { stdio: StdioOptionEnum.Pipe }

  if (command.includes(' ')) {
    const commands = command.split(' ')
    cmd = commands.shift() || ''
    args = commands
  } else {
    cmd = command
  }

  if (Array.isArray(argsOrOpts)) {
    args = argsOrOpts
    opts = options || opts
  } else {
    opts = argsOrOpts || opts
  }

  return [cmd, args, opts]
}

export default argParser
