import { getInputString } from "./getInputString"
import { InlineCSSText } from "./type"

export const CSSTextRenderer: InlineCSSText = ((strs: string[], ...values: string[]) => {
  return getInputString(strs, values)
})
