import { spawn } from '@cp'
import log, { c } from '@clog'
import { Options } from './types'

const clone = async (ghRepo: string, {
  clonedDir,
  verbose
}: Options = {}) => {
  const url = `git@github.com:${ghRepo}`

  const cmd = `git clone ${url} ${clonedDir || '.'}`

  verbose && log(c.blue(`• ${cmd}`))

  const { stdall } = await spawn(cmd)

  if (!stdall.includes('Cloning into')) {
    log(c.red(stdall))
    process.exit()
  }

  verbose && log(c.grey(`  ${stdall}`))
}

export default clone
