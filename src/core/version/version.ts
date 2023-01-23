import log, { c } from '@clog'
import { packageJSON } from '@lib'

const version = () => {
  const pkg = packageJSON()
  log(c.yellow(`${pkg.name} v${pkg.version}`))
}

export default version
