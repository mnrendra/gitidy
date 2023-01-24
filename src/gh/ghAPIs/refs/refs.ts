import getRefs from './getRefs'
import postRefs from './postRefs'
import deleteRefs from './deleteRefs'
import { RefsProps, Options } from './types'

const refs = async ({ owner, repo }: RefsProps) => {
  const get = async (branch: string, opt: Options) => await getRefs(owner, repo, branch, opt)
  const post = async (sha: string, branch: string, opt: Options) => await postRefs(owner, repo, sha, branch, opt)
  const del = async (branch: string, opt: Options) => await deleteRefs(owner, repo, branch, opt)

  return {
    get,
    post,
    delete: del
  }
}

export default refs
