export const getInputString = (strs: string[], values: string[]) => {
  values = values.concat('')
  let i = 0
  let result = ''
  for (; i < strs.length; i++) {
    result += strs[i] + values[i]
  }
  return result
}