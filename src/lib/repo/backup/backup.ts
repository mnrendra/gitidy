import { cpSync, readdirSync, existsSync } from 'node:fs'

import compress from 'compressing'
import rimraf from 'rimraf'

import log, { c } from '@clog'
import { dotDir } from '@lib'

import { Options } from './types'

const backup = async (repoName: string, {
  isForced,
  verbose
}: Options = {}) => {
  verbose && log(c.blue('• backup repo'))

  const { git, gitAlias, zip, zipAlias } = dotDir(repoName, { isForced })

  const files = readdirSync('./')

  if (files.length > 0) {
    const hasGit = existsSync('./.git')
    if (hasGit) {
      const hasGit = existsSync(git)
      if (hasGit && !isForced) {
        log(c.red(`  ${c.redBright(gitAlias)} is already exist.`))
        log(c.red(`  Use ${c.redBright('--force')} to replace it.`))
        process.exit()
      }
      rimraf.sync(git)
      cpSync('./.git', git, { recursive: true })
      rimraf.sync('./.git')
    }

    const hasZip = existsSync(zip)
    if (hasZip && !isForced) {
      log(c.red(`  ${c.redBright(zipAlias)} is already exist.`))
      log(c.red(`  Use ${c.redBright('--force')} to replace it.`))
      process.exit()
    }

    await compress.zip.compressDir(`../${repoName}`, zip)
    rimraf.sync('./.*')
    rimraf.sync('./*')
  }

  verbose && log(c.grey(`  ${gitAlias}`))
  verbose && log(c.grey(`  ${zipAlias}`))
}

export default backup
