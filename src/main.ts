import { argv } from '@cp'
import log, { c } from '@clog'
import { gitVersion, gitClone } from '@git'
import { ghVersion, ghAuthStatus, ghRepoCreate } from '@gh'

const main = async () => {
  // argv
  const { cli, cmd, args, arg } = await argv()
  log(c.magenta('argv:'), [cli, cmd, args, arg])

  // gitVersion
  log(c.grey(`• git version check:`))
  const resGitVersion = await gitVersion()
  log(c.blue(`• ${resGitVersion}`))

  // ghVersion
  log(c.grey(`• gh version check:`))
  const resGhVersion = await ghVersion()
  log(c.blue(`• ${resGhVersion}`))

  // ghAuthStatus
  log(c.grey(`• gh auth check:`))
  const resGhAuthStatus = await ghAuthStatus()
  log(c.blue(`• Logged in to github.com as ${c.magenta(resGhAuthStatus.ghUserName)}`))

  // ghRepoCreate
  log(c.grey(`• create Github repository:`))
  const resGhRepoCreate = await ghRepoCreate('repo-tes-21', {
    license: 'bsd-3-clause'
  })
  log(c.blue(`• Github repo created: ${c.magenta(`${resGhRepoCreate.owner.trim()}/${resGhRepoCreate.name.trim()}`)}`))

  // gitClone
  log(c.grey('• clone repository:'))
  const resGitClone = await gitClone({ repoOwner: 'mnrendra', repoName: 'my-ts-template' })
  log(c.blue(`• cloned`))
}

export default main
