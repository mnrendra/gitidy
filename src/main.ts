import { exec } from '@cp'
import log, { c } from '@clog'

const main = async () => {
  const cmd = await exec('node version')
  log(c.red(cmd))
}

export default main
