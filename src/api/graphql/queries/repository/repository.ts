import octokit from '@api/octokit'
import { isJSON } from '@utils/validator'
import { defResponse } from './types'

const repository = async (
  owner: string,
  repo: string
) => {
  const response = defResponse

  try {
    const octo = await octokit()

    const res: any = await octo.graphql(`
      query {
        repository(name: "${repo}", owner: "${owner}") {
          id
        }
      }
    `)

    if (!isJSON(res) || !isJSON(res.repository)) {
      response.error = `Invalid response: ${res}`
      return response
    }

    response.data = {
      repository: {
        id: res.repository.id
      }
    }

    return response
  } catch (err: any) {
    response.error = err.message || `${err}`
    return response
  }
}

export default repository
