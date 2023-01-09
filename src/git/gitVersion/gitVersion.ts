import { exec } from '@cp'
import log, { c } from '@clog'

const gitVersion = async () => {
  const { stdall } = await exec('git --version')

  if (stdall.includes('command not found')) {
    log(c.red(`You don't have ${c.bold('Git')}.`))
    log(c.red(`Please follow ${c.underline('https://git-scm.com/downloads')} to install ${c.bold('git')} command line.`))
    process.exit()
  }

  return stdall
}

export default gitVersion
