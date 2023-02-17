import { Octokit } from 'octokit'
import { auth } from '@api/cli'

const octokit = async () => {
  const token = await auth.token()
  const octo = new Octokit({ auth: token })
  return octo
}

export default octokit
