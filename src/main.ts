import { argv } from '@cp'
import log, { c } from '@clog'
import { gitVersion, gitClone } from '@git'

const main = async () => {
  // argv
  const { cli, cmd, args, arg } = await argv()
  log(c.magenta('argv:'), [cli, cmd, args, arg])

  // gitVersion
  log(c.grey(`• git version check:`))
  const resGitVersion = await gitVersion()
  log(c.blue(`• ${resGitVersion}`))

  // gitClone
  log(c.grey('• clone repository:'))
  const resGitClone = await gitClone({ repoOwner: 'mnrendra', repoName: 'my-ts-template' })
  log(c.blue(`• cloned`))
}

export default main
