import { exec } from '@cp'
import log, { c } from '@clog'

const ghVersion = async () => {
  const { stdall } = await exec('gh --version')

  if (stdall.includes('command not found')) {
    log(c.red(`You don't have ${c.bold('GitHub CLI')}.`))
    log(c.red(`Please follow ${c.underline('https://cli.github.com/')} to install ${c.bold('gh')} command line.`))
    process.exit()
  }

  return stdall
}

export default ghVersion
