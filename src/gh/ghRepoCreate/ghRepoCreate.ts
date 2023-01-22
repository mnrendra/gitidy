import { spawn } from '@cp'
import log, { c } from '@clog'

import { Options, Result } from './types'
import { getAccessibility } from './utils'

const ghRepoCreate = async (repoName: string, {
  orgName,
  accessibility,
  desciption,
  disableIssues,
  disableWiki,
  gitIgnore,
  homePage,
  license,
  remote,
  team,
  verbose
}: Options = {}) => {
  const args = ['repo', 'create']

  const repository = orgName ? `${orgName}/${repoName}` : repoName

  args.push(repository)
  args.push(getAccessibility(accessibility))
  args.push(`-d=${desciption || 'Created by Gitidy.'}`)
  disableIssues && args.push('--disable-issues')
  disableWiki && args.push('--disable-wiki')
  gitIgnore && args.push(`-g=${gitIgnore}`)
  homePage && args.push(`-h=${homePage}`)
  license && args.push(`-l=${license}`)
  remote && args.push(`-r=${remote}`)
  team && args.push(`-t=${team}`)
  args.push('--add-readme')

  verbose && log(c.blue(`• ${['gh', ...args].join(' ')}`))

  const { stdall } = await spawn('gh', args)

  const owner = stdall.split('https://github.com/')[1].split('/')[0].trim()
  const name = repoName.trim()
  const path = `${owner}/${name}`
  const url = stdall.trim()

  if (!(stdall.includes('✓ Created repository') || stdall === `https://github.com/${path}`)) {
    log(c.red(stdall))
    process.exit()
  }

  verbose && log(c.grey(`  https://github.com/${c.magenta(path)}`))

  const result: Result = {
    owner,
    name,
    path,
    url
  }

  return result
}

export default ghRepoCreate
