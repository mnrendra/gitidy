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

  // get repo name and create Github's repo
  const { repoName } = await recognizeRepo({ verbose: true })
  const { owner, name } = await ghRepoCreate(repoName, { verbose: true })

  // backup current source codes, clone, and restore backup source codes
  await backupRepo(repoName, { verbose: true })
  await gitClone(`${owner}/${name}`, { verbose: true })
  await restoreRepo(repoName, { verbose: true })
}

export default main
