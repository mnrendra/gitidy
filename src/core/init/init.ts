import {
  gitVersion,
  gitClone
} from '@git'

import {
  ghVersion,
  ghAuthStatus,
  ghRepoCreate
} from '@gh'

import {
  recognizeRepo,
  backupRepo,
  restoreRepo
} from '@lib'

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

  // clone and restore backup source codes
  await gitClone(`${owner}/${name}`, { verbose: true })
  await restoreRepo(repoName, { verbose: true })
}

export default main
