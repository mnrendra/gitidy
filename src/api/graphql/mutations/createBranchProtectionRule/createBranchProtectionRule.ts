import octokit from '@api/octokit'
import { isJSON } from '@utils/validator'
import { inputParser } from '@utils/graphql'
import { CreateBranchProtectionRuleInput, defCreateBranchProtectionRuleInput, defResponse } from './types'

const { toString, toNumber, toBoolean, toArray } = inputParser

const createBranchProtectionRule = async (
  repositoryId: string,
  pattern: string,
  rule: CreateBranchProtectionRuleInput
) => {
  const response = defResponse

  try {
    const octo = await octokit()

    const input = {
      ...defCreateBranchProtectionRuleInput,
      ...rule,
      pattern,
      repositoryId
    }

    const res: any = await octo.graphql(`
      mutation {
        createBranchProtectionRule(input: {
          allowsDeletions: ${toBoolean(input.allowsDeletions)},
          allowsForcePushes: ${toBoolean(input.allowsForcePushes)},
          blocksCreations: ${toBoolean(input.blocksCreations)},
          bypassForcePushActorIds: ${toArray(input.bypassForcePushActorIds)},
          bypassPullRequestActorIds: ${toArray(input.bypassPullRequestActorIds)},
          clientMutationId: ${toString(input.clientMutationId)},
          dismissesStaleReviews: ${toBoolean(input.dismissesStaleReviews)},
          isAdminEnforced: ${toBoolean(input.isAdminEnforced)},
          lockAllowsFetchAndMerge: ${toBoolean(input.lockAllowsFetchAndMerge)},
          lockBranch: ${toBoolean(input.lockBranch)},
          pattern: ${toString(input.pattern)},
          pushActorIds: ${toArray(input.pushActorIds)},
          repositoryId: ${toString(input.repositoryId)},
          requireLastPushApproval: ${toBoolean(input.requireLastPushApproval)},
          requiredApprovingReviewCount: ${toNumber(input.requiredApprovingReviewCount)},
          requiredStatusCheckContexts: ${toArray(input.requiredStatusCheckContexts)},
          requiredStatusChecks: ${toArray(input.requiredStatusChecks)},
          requiresApprovingReviews: ${toBoolean(input.requiresApprovingReviews)},
          requiresCodeOwnerReviews: ${toBoolean(input.requiresCodeOwnerReviews)},
          requiresCommitSignatures: ${toBoolean(input.requiresCommitSignatures)},
          requiresConversationResolution: ${toBoolean(input.requiresConversationResolution)},
          requiresLinearHistory: ${toBoolean(input.requiresLinearHistory)},
          requiresStatusChecks: ${toBoolean(input.requiresStatusChecks)},
          requiresStrictStatusChecks: ${toBoolean(input.requiresStrictStatusChecks)},
          restrictsPushes: ${toBoolean(input.restrictsPushes)},
          restrictsReviewDismissals: ${toBoolean(input.restrictsReviewDismissals)},
          reviewDismissalActorIds: ${toArray(input.reviewDismissalActorIds)},
        }) {
          clientMutationId
        }
      }
    `)

    if (!isJSON(res) || !isJSON(res.createBranchProtectionRule)) {
      response.error = `Invalid response: ${res}`
      return response
    }

    response.data = {
      createBranchProtectionRule: {
        clientMutationId: res.createBranchProtectionRule.clientMutationId
      }
    }

    return response
  } catch (err: any) {
    response.error = err.message || `${err}`
    return response
  }
}

export default createBranchProtectionRule
