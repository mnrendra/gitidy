type Repository = {
  id: string,
}

type Target = {
  oid: string,
  repository: Repository,
}

type Ref = {
  id: string,
  name: string,
  target: Target,
}

type GraphQLCreateRefResponse = {
  clientMutationId: string,
  ref: Ref,
}

type Data = {
  createRef: GraphQLCreateRefResponse,
}

export type Response = {
  error: null | string,
  data: Data,
}

export const defResponse: Response = {
  error: null,
  data: {
    createRef: {
      clientMutationId: '',
      ref: {
        id: '',
        name: '',
        target: {
          oid: '',
          repository: {
            id: '',
          },
        },
      },
    },
  },
}
