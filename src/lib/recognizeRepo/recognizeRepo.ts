import log, { c } from '@clog'
import { Result, Options } from './types'

const recognizeRepo = async ({
  verbose
}: Options = {}) => {
  verbose && log(c.blue('• recognize repo'))

  const repoPath = process.cwd()

  const repoName = repoPath.split('/').pop() || ''

  verbose && log(c.grey(`This repo name: ${repoName}`))

  const result: Result = {
    repoName,
    repoPath
  }

  return result
}

export default recognizeRepo