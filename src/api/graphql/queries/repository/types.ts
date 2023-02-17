type Owner = {
  id: string,
  login: string,
}

type Target = {
  id: string,
  oid: string,
}

type DefaultBranchRef = {
  id: string,
  name: string,
  target: Target,
}

type GraphQLRepositoryResponse = {
  id: string,
  name: string,
  owner: Owner,
  defaultBranchRef: DefaultBranchRef,
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
      id: '',
      name: '',
      owner: {
        id: '',
        login: '',
      },
      defaultBranchRef: {
        id: '',
        name: '',
        target: {
          id: '',
          oid: '',
        },
      },
    },
  },
}
