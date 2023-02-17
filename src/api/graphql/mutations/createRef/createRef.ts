import octokit from '@api/octokit'
import { isJSON, isString } from '@utils/validator'
import { inputParser } from '@utils/graphql'
import { defResponse } from './types'

const { toString } = inputParser

const createRef = async (
  repositoryId = '',
  oid = '',
  name = '',
  clientMutationId = '',
) => {
  const response = defResponse

  try {
    const octo = await octokit()

    const res: any = await octo.graphql(`
      mutation {
        createRef(input: {
          clientMutationId: ${toString(clientMutationId)},
          name: ${toString(`refs/heads/${name}`)},
          oid: ${toString(oid)},
          repositoryId: ${toString(repositoryId)},
        }) {
          clientMutationId
          ref {
            id
            name
            target {
              oid
              repository {
                id
              }
            }
          }
        }
      }
    `)

    if (!(
      isJSON(res) &&
      isJSON(res.createRef) &&
      isString(res.createRef.clientMutationId) &&
      isJSON(res.createRef.ref) &&
      isString(res.createRef.ref.id) &&
      res.createRef.ref.id &&
      isString(res.createRef.ref.name) &&
      res.createRef.ref.name &&
      isJSON(res.createRef.ref.target) &&
      isString(res.createRef.ref.target.oid) &&
      res.createRef.ref.target.oid &&
      isJSON(res.createRef.ref.target.repository) &&
      isString(res.createRef.ref.target.repository.id) &&
      res.createRef.ref.target.repository.id
    )) {
      response.error = `Invalid response: ${res}`
      return response
    }

    response.data = {
      createRef: {
        clientMutationId: res.createRef.clientMutationId,
        ref: {
          id: res.createRef.ref.id,
          name: res.createRef.ref.name,
          target: {
            oid: res.createRef.ref.target.oid,
            repository: {
              id: res.createRef.ref.target.repository.id,
            },
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

export default createRef
