type GraphQLRepositoryResponse = {
  id: string,
}

type Data = {
  repository: GraphQLRepositoryResponse,
}

export type Response = {
  error: null | string,
  data: Data,
}

export const defResponse: Response = {
  error: null,
  data: {
    repository: {
      id: ''
    }
  },
}
