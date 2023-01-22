import { argv } from '@cp'
import { init } from '@core'

const main = async () => {
  const { cmd, args } = await argv()

  switch (cmd) {
    case 'init': init(args); break
    default: console.log(cmd)
  }
}

export default main
