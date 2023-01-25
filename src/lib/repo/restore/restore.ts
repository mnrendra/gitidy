import { existsSync } from 'node:fs'

import compress from 'compressing'

import log, { c } from '@clog'
import getBackupDir from '@lib/dotDir'

import { Options } from './types'

const restore = async (repoName: string, {
  verbose
}: Options = {}) => {
  verbose && log(c.blue('• restore repo'))

  const { zip, home } = getBackupDir(repoName, { skip: true })
  const target = `${process.cwd()}/..`

  const hasZip = existsSync(zip)
  if (hasZip) {
    await compress.zip.uncompress(zip, target)
  }

  verbose && log(c.grey(`  ${target.replace(home, '~')}`))
}

export default restore
