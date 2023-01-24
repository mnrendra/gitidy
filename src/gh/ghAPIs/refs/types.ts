type Object = {
  sha: string,
  type: string,
  url: string
}

export type Data = {
  ref: string,
  node_id: string,
  url: string,
  object: Object,
}

export type RefsProps = {
  owner: string,
  repo: string
}

export type Options = {
  verbose?: boolean,
}
