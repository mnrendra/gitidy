import log, { c } from '@clog'
import lib from '@lib'
import git from '@git'

import {
  checkVersion,
  getUsername,
  createRepo,

  queryRepo,
  createBranchProtection,
  createBranch,
} from '@api/api'

import rules from './rules'

const main = async (args?: string[]) => {
  // git version
  await git.version({ verbose: true })

  // gh version
  await checkVersion()

  // gh auth status
  const username = await getUsername()

  // lib repo recognize
  const { repoName } = await lib.repo.recognize({ verbose: true })

  // lib repo backup
  await lib.repo.backup(repoName, { verbose: true, isForced: args?.includes('--force') })

  // gh repo create
  const { owner, repo } = await createRepo(username, repoName)

  // query repo
  const { repository } = await queryRepo(owner, repo)

  // protect branch [main]
  await createBranchProtection(repository.id, repository.defaultBranchRef.name, rules.main)

  // create [dev] branch
  await createBranch(repository.id, repository.defaultBranchRef.target.oid, 'dev')

  // protect branch [dev]
  await createBranchProtection(repository.id, 'dev', rules.dev)

  // protect branch [release]
  await createBranchProtection(repository.id, 'release/v*', rules.release)

  // protect branch [hotfix]
  await createBranchProtection(repository.id, 'hotfix/v*', rules.hotfix)

  // create [feat/init_project] branch
  await createBranch(repository.id, repository.defaultBranchRef.target.oid, 'feat/init_project')

  // clone
  await git.clone(`${owner}/${repo}`, { verbose: true })

  // restore source code
  await lib.repo.restore(repoName, { verbose: true })

  // checkout to [feat/init_project]
  await git.checkout('feat/init_project', { verbose: true })

  // done !
  log(c.greenBright(`Done!`))
  log(c.green(`New ${c.greenBright('git')} and ${c.greenBright('GitHub')} repository successfully created!`))
  log(c.green(`GitHub repository: ${c.greenBright(`https://github.com/${owner}/${repo}`)}`))
}


export default main
