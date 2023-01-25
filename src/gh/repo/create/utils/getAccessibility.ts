import { AccessibilityEnum } from '../enums'

const getAccessibility = (access: string | undefined) => {
  switch (access) {
    case AccessibilityEnum.Private: return '--private'
    case AccessibilityEnum.Internal: return '--internal'
    default: return '--public'
  }
}

export default getAccessibility
