import { exec } from '@cp'
import log, { c } from '@clog'
import { Options } from './types'

const gitVersion = async ({
  verbose
}: Options = {}) => {
  const cmd = 'git --version'

  verbose && log(c.blue(`• ${cmd}`))

  const { stdall } = await exec(cmd)

  if (stdall.includes('command not found')) {
    log(c.red(`You don't have ${c.bold('Git')}.`))
    log(c.red(`Please follow ${c.underline('https://git-scm.com/downloads')} to install ${c.bold('git')} command line.`))
    process.exit()
  }

  verbose && log(c.grey(stdall))

  return stdall
}

export default gitVersion
