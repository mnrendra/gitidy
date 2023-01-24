import { Rule } from '@api/protectedBranches/types'

export const main: Rule = {
  required_status_checks: {
    strict: true,
    contexts: [],
  },
  enforce_admins: false,
  required_pull_request_reviews: {
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
    required_approving_review_count: 2,
    require_last_push_approval: true,
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
  required_conversation_resolution: true,
  lock_branch: false,
  allow_fork_syncing: false
}

export const dev: Rule = {
  required_status_checks: {
    strict: true,
    contexts: [],
  },
  enforce_admins: false,
  required_pull_request_reviews: {
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
    required_approving_review_count: 2,
    require_last_push_approval: true,
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
  required_linear_history: true,
  allow_force_pushes: false,
  allow_deletions: false,
  block_creations: false,
  required_conversation_resolution: true,
  lock_branch: false,
  allow_fork_syncing: false
}
