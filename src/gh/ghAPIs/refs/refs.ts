import getRefs from './getRefs'
import postRefs from './postRefs'
import deleteRefs from './deleteRefs'

type Props = {
  owner: string,
  repo: string
}

const refs = async ({ owner, repo }: Props) => {
  const get = async (branch: string) => await getRefs(owner, repo, branch)
  const post = async (sha: string, branch: string) => await postRefs(owner, repo, sha, branch)
  const del = async (branch: string) => await deleteRefs(owner, repo, branch)

  return {
    get,
    post,
    delete: del
  }
}

export default refs
