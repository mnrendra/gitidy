import { exec } from '@cp'
import log, { c } from '@clog'
import { Options } from './types'

const token = async ({
  verbose
}: Options = {}) => {
  const cli = 'gh auth token'

  verbose && log(c.blue(`• ${cli}`))

  const { stdall } = await exec(cli)

  if (stdall.includes('You are not logged')) {
    log(c.red('You are not logged into any GitHub hosts.'))
    log(c.red(`Run ${c.bold('gh auth login')} to authenticate.`))
    process.exit()
  }

  const token = stdall.trim()

  verbose && log(c.grey(`  token: ***`))

  return token
}

export default token
