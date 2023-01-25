import log, { c } from '@clog'
import { packageJSON } from '@lib'

const version = () => {
  const app = packageJSON()
  log(c.yellow(`${app.name} v${app.version}`))
}

export default version
