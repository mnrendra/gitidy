import octokit from '@api/octokit'

const create = async (repoId: string, pattern: string, rule: any = {}) => {
  try {
    const octo = await octokit()

    const res = await octo.graphql(`
      mutation {
        createBranchProtectionRule(input: {
          repositoryId: "${repoId}", 
          pattern: "${pattern}",
          requiresCommitSignatures: ${rule.requiresCommitSignatures}
        }) {
          clientMutationId
        }
      }
    `)

    return res
  } catch (err: any) {
    return { error: err.message || `${err}` }
  }
}

export default create
