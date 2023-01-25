import log, { c } from '@clog'
import { packageJSON } from '@lib'
import { argv } from '@cp'
import { init, version } from '@core'

const main = async () => {
  const app = packageJSON()

  const { cmd, args } = await argv()

  switch (cmd) {
    // init
    case 'init': init(args); break
    // version
    case 'version': version(); break
    case '-version': version(); break
    case '--version': version(); break
    case 'v': version(); break
    case '-v': version(); break
    case undefined: version(); break
    //
    default:
      log(c.red(`${c.redBright(cmd)} is not a ${app.name} command`))
      log(c.red(`See ${c.redBright('gitidy --help')}`))
  }
}

export default main
