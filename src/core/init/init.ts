import {
  gitVersion,
  gitClone,
  gitCheckout
} from '@git'

import {
  ghVersion,
  ghAuthStatus,
  ghRepoCreate,
  ghAPIs
} from '@gh'

import {
  recognizeRepo,
  backupRepo,
  restoreRepo
} from '@lib'

import log, { c } from '@clog'

const main = async (args?: string[]) => {
  // check required commands
  await gitVersion({ verbose: true })
  await ghVersion({ verbose: true })

  // check gh' logged status
  await ghAuthStatus({ verbose: true })

  // get repo name
  const { repoName } = await recognizeRepo({ verbose: true })

  // backup current source codes
  await backupRepo(repoName, { verbose: true, isForced: args?.includes('--force') })

  // create Github's repo
  const { owner, name } = await ghRepoCreate(repoName, { verbose: true })
  // create Github's repo branches
  const refs = await ghAPIs.refs({ owner, repo: name })
  const main = await refs.get('main', { verbose: true })
  const dev = await refs.post(main.object.sha, 'dev', { verbose: true })
  const feat = await refs.post(dev.object.sha, 'feat/init_project', { verbose: true })

  // clone and restore backup source codes
  await gitClone(`${owner}/${name}`, { verbose: true })
  await restoreRepo(repoName, { verbose: true })

  // checkout feat/init_project
  await gitCheckout('feat/init_project', { verbose: true })

  log(c.greenBright(`Done!`))
  log(c.green(`New ${c.greenBright('git')} and ${c.greenBright('GitHub')} repository successfully created!`))
  log(c.green(`GitHub repository: ${c.greenBright(`https://github.com/${owner}/${name}`)}`))
}

export default main
