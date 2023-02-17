import { CreateBranchProtectionRuleInput } from '@api/graphql/mutations/createBranchProtectionRule/types'

export const main: CreateBranchProtectionRuleInput = {
  clientMutationId: '',
  repositoryId: '',
  pattern: 'main',
  requiredApprovingReviewCount: 2,
  dismissesStaleReviews: true,
  requiresCodeOwnerReviews: true,
  requireLastPushApproval: true,
  // restrictsPushes: true, // only for Organization
  restrictsReviewDismissals: true,
  reviewDismissalActorIds: [],
  bypassPullRequestActorIds: [],
  requiresStatusChecks: true,
  requiredStatusChecks: [],
  requiredStatusCheckContexts: [],
  requiresStrictStatusChecks: true,
  requiresConversationResolution: true,
  requiresCommitSignatures: true,
  requiresLinearHistory: false,
  lockBranch: false,
  allowsForcePushes: false,
  bypassForcePushActorIds: [],
  pushActorIds: [],
  allowsDeletions: false,
  blocksCreations: true,
  requiresApprovingReviews: true,
  lockAllowsFetchAndMerge: true,
  isAdminEnforced: true,
}

export const dev: CreateBranchProtectionRuleInput = {
  ...main,
  pattern: 'dev',
  requiresCommitSignatures: false,
  requiresLinearHistory: true,
}

export const release: CreateBranchProtectionRuleInput = {
  ...main,
  pattern: 'release/v*',
  requiresLinearHistory: true,
  allowsDeletions: true,
}

export const hotfix: CreateBranchProtectionRuleInput = {
  ...dev,
  pattern: 'hotfix/v*',
  allowsDeletions: true,
}

export default {
  main,
  dev,
  release,
  hotfix,
}
