export type RequiredStatusCheckInput = {
  appId: string,
  context: string,
}

export type CreateBranchProtectionRuleInput = {
  allowsDeletions?: boolean,
  allowsForcePushes?: boolean,
  blocksCreations?: boolean,
  bypassForcePushActorIds?: string[],
  bypassPullRequestActorIds?: string[],
  clientMutationId?: string,
  dismissesStaleReviews?: boolean,
  isAdminEnforced?: boolean,
  lockAllowsFetchAndMerge?: boolean,
  lockBranch?: boolean,
  pattern: string,
  pushActorIds?: string[],
  repositoryId: string,
  requireLastPushApproval?: boolean,
  requiredApprovingReviewCount?: number,
  requiredStatusCheckContexts?: string[],
  requiredStatusChecks?: RequiredStatusCheckInput[],
  requiresApprovingReviews?: boolean,
  requiresCodeOwnerReviews?: boolean,
  requiresCommitSignatures?: boolean,
  requiresConversationResolution?: boolean,
  requiresLinearHistory?: boolean,
  requiresStatusChecks?: boolean,
  requiresStrictStatusChecks?: boolean,
  restrictsPushes?: boolean,
  restrictsReviewDismissals?: boolean,
  reviewDismissalActorIds?: string[],
}

export const defCreateBranchProtectionRuleInput: CreateBranchProtectionRuleInput = {
  allowsDeletions: false,
  allowsForcePushes: false,
  blocksCreations: false,
  bypassForcePushActorIds: [],
  bypassPullRequestActorIds: [],
  clientMutationId: '',
  dismissesStaleReviews: false,
  isAdminEnforced: false,
  lockAllowsFetchAndMerge: false,
  lockBranch: false,
  pattern: '',
  pushActorIds: [],
  repositoryId: '',
  requireLastPushApproval: false,
  requiredApprovingReviewCount: 0,
  requiredStatusCheckContexts: [],
  requiredStatusChecks: [],
  requiresApprovingReviews: false,
  requiresCodeOwnerReviews: false,
  requiresCommitSignatures: false,
  requiresConversationResolution: false,
  requiresLinearHistory: false,
  requiresStatusChecks: false,
  requiresStrictStatusChecks: false,
  restrictsPushes: false,
  restrictsReviewDismissals: false,
  reviewDismissalActorIds: [],
}

type GraphQLCreateBranchProtectionRuleResponse = {
  clientMutationId: string,
}

type Data = {
  createBranchProtectionRule: GraphQLCreateBranchProtectionRuleResponse,
}

export type Response = {
  error: null | string,
  data: Data,
}

export const defResponse: Response = {
  error: null,
  data: {
    createBranchProtectionRule: {
      clientMutationId: '',
    },
  },
}
