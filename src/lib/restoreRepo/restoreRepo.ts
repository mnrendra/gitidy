import { existsSync } from 'node:fs'
import compress from 'compressing'
import log, { c } from '@clog'
import getBackupDir from '@lib/getBackupDir'
import { Options } from './types'

const restoreRepo = async (repoName: string, {
  verbose
}: Options = {}) => {
  verbose && log(c.blue('• restore repo'))

  const { zip, zipAlias } = getBackupDir(repoName, { skip: true })
  const targetDir = `${process.cwd()}/..`

  const hasZip = existsSync(zip)
  if (hasZip) {
    await compress.zip.uncompress(zip, targetDir)
  }

  verbose && log(c.grey(`  from: ${zipAlias}`))
  verbose && log(c.grey(`  to: ${targetDir}`))
}

export default restoreRepo
