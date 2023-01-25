import { homedir } from 'node:os'
import { existsSync, mkdirSync } from 'node:fs'

import rimraf from 'rimraf'

import log, { c } from '@clog'
import { packageJSON } from '@lib'

import { Options, Result } from './types'

const dotDir = (repoName: string, {
  isForced,
  skip
}: Options = {}) => {
  const { name } = packageJSON()

  const home = homedir()
  const homeAlias = '~'

  const base = `${home}/.${name}`
  const baseAlias = base.replace(home, '~')

  const hasBase = existsSync(base)
  if (!hasBase) mkdirSync(base)

  const backup = `${base}/backup`
  const backupAlias = backup.replace(home, '~')

  const hasBackup = existsSync(backup)
  if (!hasBackup) mkdirSync(backup)

  const repo = `${backup}/${repoName}`
  const repoAlias = repo.replace(home, '~')

  const hasRepo = existsSync(repo)
  if (hasRepo) {
    if (!skip) {
      if (!isForced) {
        log(c.red(`  ${c.redBright(repoAlias)} is already exist.`))
        log(c.red(`  Use ${c.redBright('--force')} to replace it.`))
        process.exit()
      }

      rimraf.sync(repo)
    }
  }

  if (!skip) mkdirSync(repo)

  const git = `${repo}/.git`
  const gitAlias = git.replace(home, '~')

  const zip = `${repo}/source.zip`
  const zipAlias = zip.replace(home, '~')

  const result: Result = {
    home,
    homeAlias,
    base,
    baseAlias,
    backup,
    backupAlias,
    repo,
    repoAlias,
    git,
    gitAlias,
    zip,
    zipAlias
  }

  return result
}

export default dotDir
