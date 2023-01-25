import { Rule } from '@api/protectedBranches/types'

export const main: Rule = {
  required_pull_request_reviews: {
    required_approving_review_count: 2,
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
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
  required_status_checks: {
    strict: true,
    contexts: [],
  },
  required_conversation_resolution: true,
  required_linear_history: false,
  lock_branch: false,
  allow_force_pushes: false,
  allow_deletions: false,
  restrictions: null,
  // restrictions: {
  //   users: [],
  //   teams: [],
  //   apps: []
  // },
  block_creations: false,
  allow_fork_syncing: false,
  enforce_admins: false,
}

export const dev: Rule = {
  required_pull_request_reviews: {
    required_approving_review_count: 2,
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
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
  required_status_checks: {
    strict: true,
    contexts: [],
  },
  required_conversation_resolution: true,
  required_linear_history: true,
  lock_branch: false,
  allow_force_pushes: false,
  allow_deletions: false,
  restrictions: null,
  // restrictions: {
  //   users: [],
  //   teams: [],
  //   apps: []
  // },
  block_creations: false,
  allow_fork_syncing: false,
  enforce_admins: false,
}

export const release: Rule = {
  required_pull_request_reviews: {
    required_approving_review_count: 2,
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
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
  required_status_checks: {
    strict: true,
    contexts: [],
  },
  required_conversation_resolution: true,
  required_linear_history: true,
  lock_branch: false,
  allow_force_pushes: false,
  allow_deletions: true,
  restrictions: null,
  // restrictions: {
  //   users: [],
  //   teams: [],
  //   apps: []
  // },
  block_creations: false,
  allow_fork_syncing: false,
  enforce_admins: false,
}

export const hotfix: Rule = {
  required_pull_request_reviews: {
    required_approving_review_count: 2,
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
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
  required_status_checks: {
    strict: true,
    contexts: [],
  },
  required_conversation_resolution: true,
  required_linear_history: true,
  lock_branch: false,
  allow_force_pushes: false,
  allow_deletions: true,
  restrictions: null,
  // restrictions: {
  //   users: [],
  //   teams: [],
  //   apps: []
  // },
  block_creations: false,
  allow_fork_syncing: false,
  enforce_admins: false,
}

export default {
  main,
  dev,
  release,
  hotfix
}
