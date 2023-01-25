import { Octokit } from 'octokit'
import { auth } from '@gh'

const octokit = async () => {
  const token = await auth.token()
  const octo = new Octokit({ auth: token })
  return octo
}

export default octokit
