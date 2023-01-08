export enum StdioOptionEnum {
  Pipe = 'pipe',
  Overlapped = 'overlapped',
  Ignore = 'ignore',
  Inherit = 'inherit'
}

export type StdioOptionString =
  `${StdioOptionEnum.Pipe}` |
  `${StdioOptionEnum.Overlapped}` |
  `${StdioOptionEnum.Ignore}` |
  `${StdioOptionEnum.Inherit}`

export type StdioOptions = [
  StdioOptionString | 0,
  StdioOptionString | 1,
  StdioOptionString | 2
]

export type Options = {
  stdio: StdioOptionString | StdioOptions
}

export type SpawnType = {
  stdout: string
  stderr: string
  stdall: string
  code?: number | null
  signal?: any
}
