import log, { c } from '@clog'
import lib from '@lib'
import git from '@git'
import gh from '@gh'
import api from '@api'

import rules from './rules'

const main = async (args?: string[]) => {
  // git version
  await git.version({ verbose: true })

  // gh version
  await gh.version({ verbose: true })

  // gh auth status
  await gh.auth.status({ verbose: true })

  // lib repo recognize
  const { repoName } = await lib.repo.recognize({ verbose: true })

  // lib repo backup
  await lib.repo.backup(repoName, { verbose: true, isForced: args?.includes('--force') })

  // gh repo create
  const { owner, name } = await gh.repo.create(repoName, { verbose: true })

  // gh api (refs)
  const refs = await gh.api.refs({ owner, repo: name })

  // api (protectedBranches)
  const pb = await api.protectedBranches({ owner, repo: name })

  // get [main] refs
  const main = await refs.get('main', { verbose: true })

  // protect branch [main]
  await pb.updateBranchProtection('main', rules.main, { verbose: true })

  // create [dev] branch
  const dev = await refs.post(main.object.sha, 'dev', { verbose: true })

  // protect branch [dev]
  await pb.updateBranchProtection('dev', rules.dev, { verbose: true })

  // create [feat/init_project] branch
  await refs.post(dev.object.sha, 'feat/init_project', { verbose: true })

  // clone
  await git.clone(`${owner}/${name}`, { verbose: true })

  // restore source code
  await lib.repo.restore(repoName, { verbose: true })

  // checkout to [feat/init_project]
  await git.checkout('feat/init_project', { verbose: true })

  // done !
  log(c.greenBright(`Done!`))
  log(c.green(`New ${c.greenBright('git')} and ${c.greenBright('GitHub')} repository successfully created!`))
  log(c.green(`GitHub repository: ${c.greenBright(`https://github.com/${owner}/${name}`)}`))
}


export default main
