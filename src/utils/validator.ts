export const isString = (val: any) => {
  return (
    typeof val === 'string'
  )
}

export const isJSON = (val: any) => {
  return (
    typeof val === 'object' && 
    val !== null &&
    !Array.isArray(val) &&
    Object.prototype.toString.call(val) !== '[object Date]'
  )
}

export const isArray = (val: any) => {
  return (
    typeof val === 'object' && 
    val !== null &&
    Array.isArray(val)
  )
}
