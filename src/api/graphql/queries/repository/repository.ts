import octokit from '@api/octokit'
import { isJSON, isString } from '@utils/validator'
import { defResponse } from './types'

const repository = async (
  owner: string,
  repo: string,
) => {
  const response = defResponse

  try {
    const octo = await octokit()

    const res: any = await octo.graphql(`
      query {
        repository(name: "${repo}", owner: "${owner}") {
          id
          name
          owner {
            id
            ... on User {
              login
            }
          }
          defaultBranchRef {
            id
            name
            target {
              id
              ... on Commit {
                id
                oid
              }
            }
          }
        }
      }
    `)

    if (!(
      isJSON(res) &&
      isJSON(res.repository) &&
      isString(res.repository.id) &&
      res.repository.id &&
      isString(res.repository.name) &&
      res.repository.name &&
      isJSON(res.repository.owner) &&
      isString(res.repository.owner.id) &&
      res.repository.owner.id &&
      isString(res.repository.owner.login) &&
      res.repository.owner.login &&
      isJSON(res.repository.defaultBranchRef) &&
      isString(res.repository.defaultBranchRef.id) &&
      res.repository.defaultBranchRef.id &&
      isString(res.repository.defaultBranchRef.name) &&
      res.repository.defaultBranchRef.name &&
      isJSON(res.repository.defaultBranchRef.target) &&
      isString(res.repository.defaultBranchRef.target.id) &&
      res.repository.defaultBranchRef.target.id &&
      isString(res.repository.defaultBranchRef.target.oid) &&
      res.repository.defaultBranchRef.target.oid
    )) {
      response.error = `Invalid response: ${res}`
      return response
    }

    response.data = {
      repository: {
        id: res.repository.id,
        name: res.repository.name,
        owner: {
          id: res.repository.owner.id,
          login: res.repository.owner.login,
        },
        defaultBranchRef: {
          id: res.repository.defaultBranchRef.id,
          name: res.repository.defaultBranchRef.name,
          target: {
            id: res.repository.defaultBranchRef.target.id,
            oid: res.repository.defaultBranchRef.target.oid,
          },
        },
      },
    }

    return response
  } catch (err: any) {
    response.error = err.message || `${err}`
    return response
  }
}

export default repository
