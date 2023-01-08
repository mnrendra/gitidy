import { ArgvType } from './types'

const argvSync = () => {
  const args = process.argv.slice(2)

  const cli = args.join(' ')
  const cmd = args.shift()

  const data: ArgvType = {
    cli,
    cmd,
    args,
    arg: args.join(' ')
  }

  return data
}

export default argvSync
