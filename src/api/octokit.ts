import { Octokit } from 'octokit'
import { ghAuthToken } from '@gh'

const octokit = async () => {
  const token = await ghAuthToken()
  const octo = new Octokit({ auth: token })
  return octo
}

export default octokit
