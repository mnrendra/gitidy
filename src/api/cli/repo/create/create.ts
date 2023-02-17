import { spawn } from '@cp'
import log, { c } from '@clog'

import { Options, Result } from './types'
import { getAccessibility } from './utils'

const create = async (owner: string, repo: string, {
  accessibility,
  desciption,
  disableIssues,
  disableWiki,
  gitIgnore,
  homePage,
  license,
  remote,
  team,
  verbose,
}: Options = {}) => {
  verbose && log(c.blue(`• Create GitHub repository`))

  const args = ['repo', 'create']

  const repository = `${owner}/${repo}`

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

  // HTTP 422: Repository creation failed. (https://api.github.com/user/repos)
  // name already exists on this account

  if (!(
    stdall.includes('✓ Created repository') ||
    stdall === `https://github.com/${repository}`
  )) {
    log(c.red(stdall))
    process.exit()
  }

  // const repoOwner = stdall.split('https://github.com/')[1].split('/')[0].trim()
  // const repoName = repo.trim()

  const result: Result = {
    owner,
    repo,
    url: stdall.trim(),
  }

  verbose && log(c.grey(`  Created GitHub repository ✓`))

  return result
}

export default create
