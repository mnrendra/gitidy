import { argv } from '@cp'
import log, { c } from '@clog'

const main = async () => {
  const { cli, cmd, args, arg }: any = await argv()
  log(c.magenta('argv:'), [cli, cmd, args, arg])
}

export default main
