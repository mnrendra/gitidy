import { exec } from '@cp'
import log, { c } from '@clog'
import { Options } from './types'

const status = async ({
  verbose
}: Options = {}) => {
  const cmd = 'gh auth status'

  verbose && log(c.blue(`• ${cmd}`))

  const { stdall } = await exec('gh auth status')

  if (stdall.includes('You are not logged')) {
    log(c.red('You are not logged into any GitHub hosts.'))
    log(c.red(`Run ${c.bold('gh auth login')} to authenticate.`))
    process.exit()
  }

  if (!stdall.includes('Logged in to github.com as ')) {
    log(c.red(stdall))
    process.exit()
  }

  const ghUserName = stdall.split('Logged in to github.com as ')[1].split(' ')[0]

  verbose && log(c.grey(`  ${stdall.replace(ghUserName, c.magenta(ghUserName))}`))

  return { ghUserName }
}

export default status
