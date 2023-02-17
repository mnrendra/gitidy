import { exec } from '@cp'
import log, { c } from '@clog'
import { Options } from './types'

const version = async ({
  verbose,
}: Options = {}) => {
  const cmd = 'gh --version'

  verbose && log(c.blue(`• ${cmd}`))

  const { stdall } = await exec(cmd)

  if (stdall.includes('command not found')) {
    log(c.red(`You don't have ${c.bold('GitHub CLI')}.`))
    log(c.red(`Please follow ${c.underline('https://cli.github.com/')} to install ${c.bold('gh')} command line.`))
    process.exit()
  }

  verbose && log(c.grey(`  ${stdall.replace('\n', '\n  ')}`))

  return stdall
}

export default version
