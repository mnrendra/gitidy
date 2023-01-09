import { spawn } from '@cp'
import clog, { c } from '@clog'

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
  team
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

  const { stdall } = await spawn('gh', args)

  if (stdall.includes('already exists')) {
    clog(c.red(`https://github.com/${c.redBright(repository)} already exist!`))
    process.exit()
  }

  if (!stdall.includes('✓ Created repository')) {
    clog(c.red(stdall))
    process.exit()
  }

  const owner = stdall.split('https://github.com/')[1].split('/')[0].trim()
  const name = repoName.trim()

  const result: Result = {
    owner,
    name,
    path: `${owner}/${name}`,
    url: stdall.trim()
  }

  return result
}

export default ghRepoCreate
