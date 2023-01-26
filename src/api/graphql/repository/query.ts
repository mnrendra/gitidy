import octokit from '@api/octokit'

const query = async (owner: string, repo: string) => {
  try {
    const octo = await octokit()

    const res = await octo.graphql(`
      query {
        repository(name: "${repo}", owner: "${owner}") {
          id
        }
      }
    `)

    return res
  } catch (err: any) {
    return { error: err.message || `${err}` }
  }
}

export default query
