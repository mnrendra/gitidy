import { isJSON } from "@utils/validator"

export const toString = (val: string = '') => {
  return `"${val}"`
}

export const toNumber = (val: number = 0) => {
  return `${val}`
}

export const toBoolean = (val: boolean = false) => {
  return `${val}`
}

export const toArray = (val: any[] = []) => {
  return `${JSON.stringify(val)}`
}

export const toJSON = (val: any = {}) => {
  if (!isJSON(val)) throw new Error('Value must be a JSON object!')
  return `${JSON.stringify(val)}`
}
