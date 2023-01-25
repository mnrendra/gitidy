type UsersTeams = {
  users: string[],
  teams: string[],
}

type UsersTeamsApps = {
  users: string[],
  teams: string[],
  apps: string[]
}

type RequiredStatusChecks = {
  strict: boolean,
  contexts: string[]
}

type RequiredPullRequestReviews = {
  dismiss_stale_reviews: boolean,
  require_code_owner_reviews: boolean,
  required_approving_review_count: number,
  require_last_push_approval: boolean,
  dismissal_restrictions?: UsersTeams,
  bypass_pull_request_allowances?: UsersTeams
}

export type Rule = {
  required_status_checks: RequiredStatusChecks,
  enforce_admins: boolean,
  required_pull_request_reviews: RequiredPullRequestReviews,
  restrictions: UsersTeamsApps | null,
  required_linear_history: boolean,
  allow_force_pushes: boolean,
  allow_deletions: boolean,
  block_creations: boolean,
  required_conversation_resolution: boolean,
  lock_branch: boolean,
  allow_fork_syncing: boolean
}

export const defRule: Rule = {
  required_status_checks: {
    strict: false,
    contexts: [],
  },
  enforce_admins: false,
  required_pull_request_reviews: {
    dismiss_stale_reviews: false,
    require_code_owner_reviews: false,
    required_approving_review_count: 0,
    require_last_push_approval: false,
    // dismissal_restrictions: {
    //   users: [],
    //   teams: [],
    // },
    // bypass_pull_request_allowances: {
    //   users: [],
    //   teams: [],
    // }
  },
  restrictions: null,
  // restrictions: {
  //   users: [],
  //   teams: [],
  //   apps: []
  // },
  required_linear_history: false,
  allow_force_pushes: false,
  allow_deletions: false,
  block_creations: false,
  required_conversation_resolution: false,
  lock_branch: false,
  allow_fork_syncing: false
}

export type Props = {
  owner: string,
  repo: string
}

export type Options = {
  verbose: boolean
}
